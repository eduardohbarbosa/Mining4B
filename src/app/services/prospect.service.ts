import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prospect } from '../models/prospect';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectService {
  url = "https://sheet.best/api/sheets/74b8c6b3-b0ce-4375-84e7-b12f5397f0e6"; //eduhenrique
  //url = "https://sheet.best/api/sheets/80c297f7-500d-4afe-b912-53860b98ba0f" //eduaerdo
  //url = ""
  
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
