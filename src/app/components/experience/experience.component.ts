import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trabajo } from 'src/app/models/trabajo';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 
  public trabajos: Trabajo[] = [];
  public editaJob: Trabajo | undefined;
  public borraJob: Trabajo | undefined;

  constructor(private trabajoService:TrabajoService) { }

  ngOnInit(): void {
    this.getTrabajo();
  }
    public getTrabajo(): void {

      this.trabajoService.getTrabajo().subscribe({
        next: (response: Trabajo[]) => {
          this.trabajos = response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
    }
  
  public onOpenModal(mode: String, trabajo?: Trabajo): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toogle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#crearJobModal');
    } else if (mode === 'delete') {
      this.borraJob = trabajo;
      button.setAttribute('data-target', '#borrarJobModal');
    } else if (mode === 'edit') {
      this.editaJob = trabajo;
      button.setAttribute('data-target', '#editarJobModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddTrabajo(addForm: NgForm) {
    document.getElementById('add-trabajo-form')?.click();
    this.trabajoService.addTrabajo(addForm.value).subscribe({
      next: (response: Trabajo) => {
        console.log(response);
        this.getTrabajo();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();

      }
    })
  }
  public onUpdateTrabajo(trabajo: Trabajo) {
    this.editaJob = trabajo;
    document.getElementById('add-trabajo-form')?.click();
    this.trabajoService.updateTrabajo(trabajo).subscribe({
      next: (response: Trabajo) => {
        console.log(response);
        this.getTrabajo();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }
  public onDeleteTrabajo(id:number):void {
    this.trabajoService.deleteTrabajo(id).subscribe({
 
      next: (response: void) => {
        console.log(response);
        this.getTrabajo();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }
}


