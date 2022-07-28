import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { Idioma } from 'src/app/models/idioma';
import { SkillsNLangService } from 'src/app/servicios/skillsnlang.service';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-skillsnlang',
  templateUrl: './skillsnlang.component.html',
  styleUrls: ['./skillsnlang.component.css']
})
export class SkillsNLangComponent implements OnInit {

  public skills: Skill[] = [];
  public editaSkill: Skill | undefined;
  public borraSkill: Skill | undefined;
  public idiomas: Idioma[] = [];
  public editaIdioma: Idioma | undefined;
  public borraIdioma: Idioma | undefined;

  constructor(private skillsNLangService: SkillsNLangService) { }

  ngOnInit(): void {
    this.getSkill();
    this.getIdioma();
  }

  public getSkill(): void {
    this.skillsNLangService.getSkill().subscribe({
      next: (response: Skill[]) => {
        this.skills = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public getIdioma(): void {
    this.skillsNLangService.getIdioma().subscribe({
      next: (response: Idioma[]) => {
        this.idiomas = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModalSkill(mode: String, skill?: Skill): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toogle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#crearSkillModal');
    } else if (mode === 'delete') {
      this.borraSkill = skill;
      button.setAttribute('data-target', '#borrarSkillModal');
    } else if (mode === 'edit') {
      this.editaSkill = skill;
      button.setAttribute('data-target', '#editaSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddSkill(addForm: NgForm) {
    document.getElementById('add-skill-form')?.click();
    this.skillsNLangService.addSkill(addForm.value).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();

      }
    })
  }

  public onUpdateSkill(skill: Skill) {
    this.editaSkill = skill;
    document.getElementById('add-skill-form')?.click();
    this.skillsNLangService.updateSkill(skill).subscribe({
      next: (response: Skill) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteSkill(id: number): void {
    this.skillsNLangService.deleteSkill(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getSkill();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModalIdioma(mode: String, idioma?: Idioma): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toogle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#crearIdiomaModal');
    } else if (mode === 'delete') {
      this.borraIdioma = idioma;
      button.setAttribute('data-target', '#borrarIdiomaModal');
    } else if (mode === 'edit') {
      this.editaIdioma = idioma;
      button.setAttribute('data-target', '#editarIdiomaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddIdioma(addForm2: NgForm) {
    document.getElementById('add-idioma-form')?.click();
    this.skillsNLangService.addIdioma(addForm2.value).subscribe({
      next: (response: Idioma) => {
        console.log(response);
        this.getIdioma();
        addForm2.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm2.reset();

      }
    })
  }

  public onUpdateIdioma(idioma: Idioma) {
    this.editaIdioma = idioma;
    document.getElementById('add-idioma-form')?.click();
    this.skillsNLangService.updateIdioma(idioma).subscribe({
      next: (response: Idioma) => {
        console.log(response);
        this.getIdioma();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })

  }

  public onDeleteIdioma(id: number): void {
    this.skillsNLangService.deleteIdioma(id).subscribe({

      next: (response: void) => {
        console.log(response);
        this.getIdioma();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
