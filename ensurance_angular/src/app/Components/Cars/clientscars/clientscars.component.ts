import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Interfaces/car';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/Services/car-service.service';

@Component({
  selector: 'app-clientscars',
  templateUrl: './clientscars.component.html',
  styleUrls: ['./clientscars.component.css']
})
export class ClientscarsComponent implements OnInit {
  Cars:Car[];
  ownerid:number;
  constructor(private _activatedRouterService:ActivatedRoute,private _CarService:CarServiceService ) { }

  ngOnInit(): void {
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
    this._CarService.getCarByID(this.ownerid).subscribe(
      (response)=>{
        this.Cars=response;
      },
      (err)=>{console.log(err);}
    );
  }

  DeleteCar(carid)
  {
    this.ownerid=this._activatedRouterService.snapshot.params['id'];
    if (confirm("Are You Sure To Delete this Car")) {  
      this._CarService.DeleteCar(carid).subscribe(  
          (success) => {  
              console.log( "Deleted Successfully") ; 
              this._CarService.getCarByID(this.ownerid).subscribe(
                (response)=>{ 
                  console.log(this.Cars);
                  this.Cars=response;
                },
                (error)=>{console.log(error);}
              );
          },
          (error)=>{console.log(error)}
          )};  
  }

}
