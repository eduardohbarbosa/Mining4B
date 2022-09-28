import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Cliente } from './model/cliente';

@Injectable({
  providedIn: 'root'
})
export class QuadranteService {
  url = "https://sheet.best/api/sheets/74b8c6b3-b0ce-4375-84e7-b12f5397f0e6?_raw=1";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  }
}
