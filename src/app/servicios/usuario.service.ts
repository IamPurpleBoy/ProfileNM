import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment.prod";
import { Usuario } from "../models/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiServerUrl:string="https://api-portfolio-production-204e.up.railway.app/"
  constructor(private http:HttpClient) { }

  getUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}api/usuario${id}`);
  }

}