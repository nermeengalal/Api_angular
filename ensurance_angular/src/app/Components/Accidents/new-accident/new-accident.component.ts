import { Component, OnInit } from '@angular/core';
import { AccidentServiceService } from 'src/app/Services/accident-service.service';
import { Accident } from 'src/app/Interfaces/accident';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-accident',
  templateUrl: './new-accident.component.html',
  styleUrls: ['./new-accident.component.css']
})
export class NewAccidentComponent implements OnInit {
  Accident:Accident;
  ownerid:number;
  constructor(private _activatedRouterService:ActivatedRoute,private _accService:AccidentServiceService ,private _router:Router,private _loc:Location) { 
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
    this.Accident={ID :0,date :'' ,location:'',DamageAmountPrice:null,Carid:this.ownerid}
  }

  ngOnInit(): void {
  }
  
  AddAccident()
  {
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
      this._accService.CreateNewAccident(this.Accident).subscribe(
        (response)=>{this._loc.back()},
        (error)=>{console.log(error);}
      )
  }


}
