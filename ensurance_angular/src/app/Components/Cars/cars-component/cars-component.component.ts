import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/Services/car-service.service';
import { Car } from 'src/app/Interfaces/car';

@Component({
  selector: 'app-cars-component',
  templateUrl: './cars-component.component.html',
  styleUrls: ['./cars-component.component.css']
})
export class CarsComponentComponent implements OnInit {
  Cars:Car[]
  constructor(private _activatedRouterService:ActivatedRoute,private _CarsService:CarServiceService) { }

  ngOnInit(): void {
    this._CarsService.getAllCars().subscribe(
      (response)=>{
        //this.Cars=response;
      },
      (err)=>{console.log(err);}
    );

  }

}
