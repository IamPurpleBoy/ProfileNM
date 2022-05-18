import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/education.service';
import { Educacion } from "src/app/models/educacion";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
public educaciones  : Educacion[]=[];

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {

    this.getEducacion();
  }

  public getEducacion():void{
    
    this.educacionService.getEducacion().subscribe({
      next:(response:Educacion[]) =>{
        this.educaciones=response;
        console.log(this.educaciones)
      },
      error:(error: HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }}