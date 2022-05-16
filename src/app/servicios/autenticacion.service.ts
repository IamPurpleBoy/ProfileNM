import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "http://localhost:8080/ver/personaPost  "
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log("Servicio corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('curentUser') || '{}'))
  }

  Loguearse(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))//aca se modifico busqueda por metodo post(this.url,credenciales).pipe(map(data =>{... falta ver TOKEN
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
