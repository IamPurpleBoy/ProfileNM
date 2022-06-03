import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public proyectos: Proyecto[] = [];
  public editaProy: Proyecto | undefined;
  public borraProy: Proyecto | undefined;

  constructor(private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.getProyecto();
  }
  public getProyecto():void{



  this.proyectoService.getProyecto().subscribe({
    next: (response:Proyecto[]) => {
      this.proyectos = response;
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
})
}
public onOpenModal(mode: String, proyecto?: Proyecto): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.style.display = 'none';
  button.setAttribute('data-toogle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#crearProyModal');
  } else if (mode === 'delete') {
    this.borraProy = proyecto;
    button.setAttribute('data-target', '#borrarProyModal');
  } else if (mode === 'edit') {
    this.editaProy = proyecto;
    button.setAttribute('data-target', '#editarProyModal');
  }
  container?.appendChild(button);
  button.click();
}
public onAddProyecto(addForm: NgForm) {
  document.getElementById('add-proyecto-form')?.click();
  this.proyectoService.addProyecto(addForm.value).subscribe({
    next: (response: Proyecto) => {
      console.log(response);
      this.getProyecto();
      addForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();

    }
  })
}
public onUpdateProyecto(proyecto: Proyecto) {
  this.editaProy = proyecto;
  document.getElementById('add-proyecto-form')?.click();
  this.proyectoService.updateProyecto(proyecto).subscribe({
    next: (response: Proyecto) => {
      console.log(response);
      this.getProyecto();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })

}
public onDeleteProyecto(id:number):void {
  this.proyectoService.deleteProy(id).subscribe({

    next: (response: void) => {
      console.log(response);
      this.getProyecto();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })

}
}
