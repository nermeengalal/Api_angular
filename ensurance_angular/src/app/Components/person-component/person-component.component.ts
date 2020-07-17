import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonServiceService } from 'src/app/Services/person-service.service';
import { Person } from 'src/app/Interfaces/person';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css']
})
export class PersonComponentComponent implements OnInit {
  Clients:Person[]
  constructor(private _activatedRouterService:ActivatedRoute,private _ClientService:PersonServiceService ) { }

  ngOnInit(): void {
    this._ClientService.getAllClients().subscribe(
      (response)=>{
        this.Clients=response;
      },
      (err)=>{console.log(err);}
    );

  }

  DeleteClient(clientid)
  {
    if (confirm("Are You Sure To Delete this Client")) {  
      this._ClientService.DeleteClients(clientid).subscribe(  
          (success) => {  
              console.log( "Deleted Successfully") ; 
              this._ClientService.getAllClients().subscribe(
                (response)=>{ 
                  console.log(this.Clients);
                  this.Clients=response;
                },
                (error)=>{console.log(error);}
              );
          },
          (error)=>{console.log(error)}
          )};  
  }

}
