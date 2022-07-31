import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  

  url = "https://nicolas-martin-ap.herokuapp.com/api/login"
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse
      (sessionStorage.getItem('curentUser') || '{}'))
   
  }

  Loguearse(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
    
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  public isLoggedIn():boolean{
      if(this.UsuarioAutenticado.accessToken){
        return true;
      } else{
      return false;   
    }
  }

  Desloguearse():void{
    window.sessionStorage.clear();
  }

}
