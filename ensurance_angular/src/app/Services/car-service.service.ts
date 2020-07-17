import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from '../Interfaces/car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private _HttpClient:HttpClient) { }
  getAllCars():Observable <Car>
  {
    return this._HttpClient.get<Car>(`${environment.API_URL}api/Cars`)
  }

  getCarByID(carid):Observable<Car[]>
  {
    return this._HttpClient.get<Car[]>(`${environment.API_URL}api/Cars/${carid}`)
  }

  CreateNewCar(car)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.post(`${environment.API_URL}api/Cars`,car ,httpOption);
  }

  DeleteCar(carid)
  {
    return this._HttpClient.delete(`${environment.API_URL}api/Cars/${carid}`);
  }

  UpdateCar(carid,car)
  {
    const httpOption={headers:new HttpHeaders({ 'Content-Type':'application/json'})};
    return this._HttpClient.put(`${environment.API_URL}api/Cars/${carid}`,car,httpOption);
  }
}
