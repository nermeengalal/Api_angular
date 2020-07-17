import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Interfaces/person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private _HttpClient:HttpClient) { }
  getAllClients():Observable <Person[]>
  {
    return this._HttpClient.get<Person[]>(`${environment.API_URL}api/People`)
  }

  getClientByID(personid):Observable<Person>
  {
    return this._HttpClient.get<Person>(`${environment.API_URL}api/People/${personid}`)
  }

  CreateNewClient(person)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.post(`${environment.API_URL}api/People`,person ,httpOption);
  }

  DeleteClients(personid)
  {
    return this._HttpClient.delete(`${environment.API_URL}api/People/${personid}`);
  }

  UpdateClient(personid,person)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.put(`${environment.API_URL}api/People/${personid}`,person,httpOption);
  }
}
