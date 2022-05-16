import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';
import { Trabajo } from "src/app/models/trabajo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public persona : Persona|undefined;
  public editPersona: Persona|undefined;
  public trabajo : Trabajo | undefined;
  public editTrabajo : Trabajo | undefined;
  
  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getPersona();
    this.getTrabajo();
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
    public getTrabajo():void{
      this.headerService.getTrabajo().subscribe({
        next:(response:Trabajo)=>{
          this.trabajo=response;
        }, 
        error:(error: HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
}
