import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public persona : Persona|undefined;
  public editPersona: Persona|undefined;

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    this.getPersona();
  }
  public getPersona():void{
    this.headerService.getPersona(81).subscribe({
      next:(response:Persona)=>{
        this.persona=response;
      }, 
      error:(error: HttpErrorResponse)=>{
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
      button.setAttribute('data-target', '#editarAboutMeModal');
    }
    container?.appendChild(button);
    button.click();
  }


  public onUpdatePersona(persona: Persona) {
    this.editPersona = persona;
    document.getElementById('edit-aboutMe-form')?.click();
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
}
