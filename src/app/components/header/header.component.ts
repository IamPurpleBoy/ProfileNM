import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import { Trabajo } from "src/app/models/trabajo";
import { Educacion } from 'src/app/models/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  //styleUrls: ['../../../../src/styles.css']

})
export class HeaderComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;
  public trabajo: Trabajo | undefined;
  public editaJob: Trabajo | undefined;
  public educacion: Educacion | undefined;
  public editaEdu: Educacion | undefined;
  isLoggedIn = false;

  constructor(private headerService: HeaderService, private autenticacionService: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
    this.getPersona();
    this.getTrabajo();
    this.getEducacion();
    if (this.autenticacionService.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }


  public getPersona(): void {
    this.headerService.getPersona(81).subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public getTrabajo(): void {
    this.headerService.getTrabajo(2).subscribe({
      next: (response: Trabajo) => {
        this.trabajo = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public getEducacion(): void {
    this.headerService.getEducacion(6).subscribe({
      next: (response: Educacion) => {
        this.educacion = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toogle', 'modal');
    if (mode === 'edit') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editarPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdatePersona(persona: Persona) {
    this.editPersona = persona;
    document.getElementById('edit-persona-form')?.click();
    this.headerService.updatePersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.getPersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }

  public onLogin() {
    this.router.navigate(['/login'])
  }

  public onLogout(): void {
    this.autenticacionService.Desloguearse();
    window.location.reload();
  }

}






