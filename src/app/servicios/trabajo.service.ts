import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import {  Trabajo } from "../models/trabajo";

@Injectable({
    providedIn: 'root'
})
export class TrabajoService{
private apiServerUrl=environment.URL;
  
constructor(private http: HttpClient) { }
 
    public getTrabajo():Observable<Trabajo[]>{
    return this.http.get<Trabajo[]>(`${this.apiServerUrl}api/trabajos`);  
  }

  public addTrabajo(trabajo:Trabajo):Observable<Trabajo>{
      return this.http.post<Trabajo>(`${this.apiServerUrl}api/newTrabajo`, trabajo);
    
  }

  public updateTrabajo(trabajo: Trabajo):Observable<Trabajo>{
    return this.http.put<Trabajo>(`${this.apiServerUrl}api/trabajo/edit`, trabajo);
  }

  public deleteTrabajo(trabajoId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}api/deleteJob/${trabajoId}` );
  }
}