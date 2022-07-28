import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import { EducacionService } from 'src/app/servicios/education.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public persona: Persona | undefined;
  public educaciones: Educacion[] = [];

  constructor(private headerService: HeaderService, private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getPersona();
  }

  public getPersona(): void {
    this.headerService.getPersona(81).subscribe(data => { this.persona = data })
  }

  public getEducacion(): void {
    this.educacionService.getEducacion().subscribe({
      next: (response: Educacion[]) => {
        this.educaciones = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}

