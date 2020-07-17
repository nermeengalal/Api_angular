import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Accident } from '../Interfaces/accident';

@Injectable({
  providedIn: 'root'
})
export class AccidentServiceService {

  constructor(private _HttpClient:HttpClient) { }
  getAllAccidents():Observable <Accident[]>
  {
    return this._HttpClient.get<Accident[]>(`${environment.API_URL}api/Accidents`)
  }

  getAccidentByID(accid):Observable<Accident[]>
  {
    return this._HttpClient.get<Accident[]>(`${environment.API_URL}api/Accidents/${accid}`)
  }

  CreateNewAccident(accident)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.post(`${environment.API_URL}api/Accidents`,accident ,httpOption);
  }

  DeleteAccident(accid)
  {
    return this._HttpClient.delete(`${environment.API_URL}api/Accidents/${accid}`);
  }

  UpdateAccident(accid,acc)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.put(`${environment.API_URL}api/Accidents/${accid}`,acc,httpOption);
  }
}
