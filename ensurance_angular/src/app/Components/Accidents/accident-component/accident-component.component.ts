import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccidentServiceService } from 'src/app/Services/accident-service.service';
import { Accident } from 'src/app/Interfaces/accident';


@Component({
  selector: 'app-accident-component',
  templateUrl: './accident-component.component.html',
  styleUrls: ['./accident-component.component.css']
})
export class AccidentComponentComponent implements OnInit {
  Accidents:Accident[]
  constructor(private _activatedRouterService:ActivatedRoute,private _AccidentService:AccidentServiceService) { }

  ngOnInit(): void {
    this._AccidentService.getAllAccidents().subscribe(
      (response)=>{
        this.Accidents=response;
      },
      (err)=>{console.log(err);}
    );
  }

}
