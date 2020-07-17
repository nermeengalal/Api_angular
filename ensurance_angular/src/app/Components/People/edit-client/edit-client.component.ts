import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonServiceService } from 'src/app/Services/person-service.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client:Person;
  clientid:number;
  constructor(private _activatedRouterService:ActivatedRoute,private _client:PersonServiceService ,private _router:Router) { }

  ngOnInit(): void {
    this.clientid=this._activatedRouterService.snapshot.params['id'];
    this._client.getClientByID(this.clientid).subscribe(
      (response)=>
      {
        this.client=response;
      },
      (error)=>
      {
        console.log(error);
      }

    )
  }

  UpdateClient()
  {
    this._client.UpdateClient(this.clientid,this.client).subscribe
    (
      (response)=>{this._router.navigateByUrl('/Our Clients')},
        (error)=>{console.log(error);}
    )
  }

}
