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
    return this.http.get<Skill[]>(`${this.apiServerUrl}api/skill`);  
  }

  public addSkill(skill:Skill):Observable<Skill>{
      return this.http.post<Skill>(`${this.apiServerUrl}api/newSkill`, skill);
    
  }

  public updateSkill(skill: Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}api/skill/edit`, skill);
  }

  public deleteSkill(skillId: number):Observable<void>{ 
    return this.http.delete<void>(`${this.apiServerUrl}api/deleteSkill/${skillId}` );
  }

  public getIdioma():Observable<Idioma[]>{
    return this.http.get<Idioma[]>(`${this.apiServerUrl}api/idioma`);  
  }

  public addIdioma(idioma:Idioma):Observable<Idioma>{
      return this.http.post<Idioma>(`${this.apiServerUrl}api/newIdioma`, idioma);
    
  }

  public updateIdioma(idioma: Idioma):Observable<Idioma>{
    return this.http.put<Idioma>(`${this.apiServerUrl}api/idioma/edit`, idioma);
  }

  public deleteIdioma(idiomaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}api/deleteIdioma/${idiomaId}` );
  }
}