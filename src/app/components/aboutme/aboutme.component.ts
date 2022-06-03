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
    this.headerService.getPersona().subscribe({
      next:(response:Persona)=>{
        this.persona=response;
      }, 
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
