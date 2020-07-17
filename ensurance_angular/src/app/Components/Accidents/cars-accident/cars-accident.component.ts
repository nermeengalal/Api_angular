import { Component, OnInit } from '@angular/core';
import { Accident } from 'src/app/Interfaces/accident';
import { ActivatedRoute } from '@angular/router';
import { AccidentServiceService } from 'src/app/Services/accident-service.service';

@Component({
  selector: 'app-cars-accident',
  templateUrl: './cars-accident.component.html',
  styleUrls: ['./cars-accident.component.css']
})
export class CarsAccidentComponent implements OnInit {
  Accidents:Accident[];
  ownerid:number;
  constructor(private _activatedRouterService:ActivatedRoute,private _AccidentService:AccidentServiceService) { }

  ngOnInit(): void {
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
    this._AccidentService.getAccidentByID(this.ownerid).subscribe(
      (response)=>{
        this.Accidents=response;
      },
      (err)=>{console.log(err);}
    );
  }

}
