import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Interfaces/car';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  Car:Car;
  ownerid:number;
  constructor(private _activatedRouterService:ActivatedRoute,private _car:CarServiceService ,private _router:Router,private _loc:Location) { 
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
    this.Car={ID :0,model :'' ,year:'',prID:this.ownerid};
  }

  ngOnInit(): void {
  }

  AddCar()
  {
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
      this._car.CreateNewCar(this.Car).subscribe(
        (response)=>{this._loc.back()},
        (error)=>{console.log(error);}
      )
  }

}
