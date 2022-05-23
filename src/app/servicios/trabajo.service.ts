import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {  Trabajo } from "../models/trabajo";

@Injectable({
    providedIn: 'root'
})
export class TrabajoService{
private apiServerUrl=environment.apiBaseUrl;
  
constructor(private http: HttpClient) { }
 
    public getTrabajo():Observable<Trabajo[]>{
    return this.http.get<Trabajo[]>(`${this.apiServerUrl}ver/trabajos`);  
  }

  public addTrabajo(trabajo:Trabajo):Observable<Trabajo>{
      return this.http.post<Trabajo>(`${this.apiServerUrl}new/trabajo`, trabajo);
    
  }

  public updateTrabajo(trabajo: Trabajo):Observable<Trabajo>{
    return this.http.put<Trabajo>(`${this.apiServerUrl}trabajos/edit/{id}`, trabajo);
  }

  public deleteTrabajo(trabajoId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}deleteJob/${trabajoId}` );
  }
}