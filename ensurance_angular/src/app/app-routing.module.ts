import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { AboutUsComponentComponent } from './Components/about-us-component/about-us-component.component';
import { ContactUsComponentComponent } from './Components/contact-us-component/contact-us-component.component';
import { PersonComponentComponent } from './Components/person-component/person-component.component';
import { NewClientComponent } from './Components/People/new-client/new-client.component';
import { EditClientComponent } from './Components/People/edit-client/edit-client.component';
import { ClientscarsComponent } from './Components/Cars/clientscars/clientscars.component';
import { NewCarComponent } from './Components/Cars/new-car/new-car.component';
import { NewAccidentComponent } from './Components/Accidents/new-accident/new-accident.component';
import { CarsAccidentComponent } from './Components/Accidents/cars-accident/cars-accident.component';


const routes: Routes = [
  {path:'Home' ,component:HomeComponentComponent},
  {path:'About us' ,component:AboutUsComponentComponent},
  {path:'Contact us' ,component:ContactUsComponentComponent},
  {path:'Our Clients' ,component:PersonComponentComponent},
  {path:'NewClient' ,component:NewClientComponent},
  {path:'EditClientdata/:id' ,component:EditClientComponent},
  {path:'ClientsCar/:id' ,component:ClientscarsComponent},
  {path:'NewCar/:id' ,component:NewCarComponent},
  {path:'CarsAccident/:id' ,component:CarsAccidentComponent},
  {path:'NewAccident/:id' ,component:NewAccidentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
