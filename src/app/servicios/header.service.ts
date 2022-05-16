import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Persona } from "../models/persona";
import { Trabajo } from "../models/trabajo";

@Injectable({
    providedIn: 'root'
})
export class HeaderService{
private apiServerUrl=environment.apiBaseUrl;
  
constructor(private http: HttpClient) { }
 
    public getPersona():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}ver/personas/1`);  
  }

  public updatePersona(persona: Persona):Observable<Persona>{
      return this.http.put<Persona>(`${this.apiServerUrl}/personas/edit/1`, persona);
    
  }
  public getTrabajo():Observable<Trabajo>{
    return this.http.get<Trabajo>(`${this.apiServerUrl}ver/trabajos/1`);  
  }

  public updateTrabajo(trabajo: Trabajo):Observable<Trabajo>{
    return this.http.put<Trabajo>(`${this.apiServerUrl}/trabajos/edit/1`, trabajo);
  
}

}