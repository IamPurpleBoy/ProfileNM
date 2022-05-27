import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Idioma } from "src/app/models/idioma";
import { Skill } from "src/app/models/skill";

@Injectable({
    providedIn: 'root'
})
export class SkillsNLangService{
private apiServerUrl=environment.apiBaseUrl;
  
constructor(private http: HttpClient) { }
 
    public getSkill():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}ver/skill`);  
  }

  public addSkill(skill:Skill):Observable<Skill>{
      return this.http.post<Skill>(`${this.apiServerUrl}new/skill`, skill);
    
  }

  public updateSkill(skill: Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}skill/edit/{id}`, skill);
  }

  public deleteSkill(skillId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}deleteSkill/${skillId}` );
  }

  public getIdioma():Observable<Idioma[]>{
    return this.http.get<Idioma[]>(`${this.apiServerUrl}ver/idioma`);  
  }

  public addIdioma(idioma:Idioma):Observable<Idioma>{
      return this.http.post<Idioma>(`${this.apiServerUrl}new/idioma`, idioma);
    
  }

  public updateIdioma(idioma: Idioma):Observable<Idioma>{
    return this.http.put<Idioma>(`${this.apiServerUrl}idioma/edit/{id}`, idioma);
  }

  public deleteIdioma(idiomaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}deleteIdioma/${idiomaId}` );
  }
}