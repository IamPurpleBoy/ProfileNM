import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/education.service';
import { Educacion } from "src/app/models/educacion";
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educaciones: Educacion[] = [];
  public editaEdu: Educacion | undefined;
  public borraEdu: Educacion | undefined;

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {

    this.getEducacion();
    
  }

  public getEducacion(): void {

    this.educacionService.getEducacion().subscribe({
      next: (response: Educacion[]) => {
        this.educaciones = response;
        console.log(this.educaciones)
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: String, educacion?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toogle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#crearEduModal');
    } else if (mode === 'delete') {
      this.borraEdu = educacion;
      button.setAttribute('data-target', '#borrarEduModal');
    } else if (mode === 'edit') {
      this.editaEdu = educacion;
      button.setAttribute('data-target', '#editarEduModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddEducacion(addForm: NgForm) {
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();

      }
    })
  }
  public onUpdateEducacion(educacion: Educacion) {
    this.editaEdu = educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }
  public onDeleteEducacion(idEdu:number):void {
    this.educacionService.deleteEducacion(idEdu).subscribe({
 
      next: (response: void) => {
        console.log(response);
        this.getEducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }
}
