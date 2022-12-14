import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prospect } from '../models/prospect';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  url = ""
  
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getProspects():Observable<Prospect[]>{
    return this.httpClient.get<Prospect[]>(this.url);
  }

/*   createProspect(prospect: Prospect):Observable<Prospect[]>{
    return this.httpClient.post<Prospect[]>(this.url, prospect)
  } 
*/

  createProspect(prospect: Prospect):Observable<Prospect>{
    return this.httpClient.post<Prospect>(this.url, prospect)
  }

  getProspect(id : number):Observable<Prospect[]>{
    return this.httpClient.get<Prospect[]>(`${this.url}/id/${id}`);
  }

  updateProspect(id: number, prospect : Prospect):Observable<Prospect>{
    return this.httpClient.put<Prospect>(`${this.url}/id/${id}`, prospect)
  }

  deleteProspect(id: string):Observable<Prospect>{
    return this.httpClient.delete<Prospect>(`${this.url}/id/${id}`)
  }
}
