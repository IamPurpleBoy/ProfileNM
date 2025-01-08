import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment.prod";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="https://api-portfolio-production-204e.up.railway.app/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url+"api/personas");
  }
}
