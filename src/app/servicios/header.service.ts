import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Persona } from "../models/persona";
import { Trabajo } from "../models/trabajo";
import { Educacion } from "../models/educacion";

@Injectable({
    providedIn: 'root'
})
export class HeaderService{
private apiServerUrl=environment.apiBaseUrl;
  
constructor(private http: HttpClient) { }
 
    public getPersona():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}api/personas/81`);  
  }

  public updatePersona(persona: Persona):Observable<Persona>{
      return this.http.put<Persona>(`${this.apiServerUrl}api/personas/edit/81`, persona);
    
  }
  public getTrabajo():Observable<Trabajo>{
    return this.http.get<Trabajo>(`${this.apiServerUrl}api/trabajos/2`);  
  }

  
  public getEducacion():Observable<Educacion>{
  return this.http.get<Educacion>(`${this.apiServerUrl}api/educacion/6`);  
}



}