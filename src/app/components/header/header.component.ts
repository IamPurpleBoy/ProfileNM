import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public persona : Persona|undefined;
  public editPersona: Persona|undefined;
  
  constructor(private headerService: HeaderService) { }

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
