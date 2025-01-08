import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { Persona } from "../models/persona";
import { Trabajo } from "../models/trabajo";
import { Educacion } from "../models/educacion";

@Injectable({
    providedIn: 'root'
})
export class HeaderService{
private apiServerUrl=environment.URL;
  
constructor(private http: HttpClient) { }
 
    public getPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}api/personas/${id}`);  
  }

  public updatePersona(persona: Persona):Observable<Persona>{
      return this.http.put<Persona>(`${this.apiServerUrl}api/persona/edit`, persona);
    
  }

  public updatePersona2(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}api/persona/edit`, persona);
  
}
  public getTrabajo(id:number):Observable<Trabajo>{
    return this.http.get<Trabajo>(`${this.apiServerUrl}api/trabajos/${id}`);  
  }

  
  public getEducacion(idEdu:number):Observable<Educacion>{
  return this.http.get<Educacion>(`${this.apiServerUrl}api/educacion/${idEdu}`);  
}



}