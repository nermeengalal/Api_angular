import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/person';
import { PersonServiceService } from 'src/app/Services/person-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  Client:Person;
  constructor(private _client:PersonServiceService ,private _router:Router) { 
    this.Client={ID :0,name :'' ,address:null};
  }

  ngOnInit(): void {
  }

  AddClient()
  {
      this._client.CreateNewClient(this.Client).subscribe(
        (response)=>{this._router.navigateByUrl('/Our Clients')},
        (error)=>{console.log(error);}
      )
  }
}
