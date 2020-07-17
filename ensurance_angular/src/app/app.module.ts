import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponentComponent } from './Components/person-component/person-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CarsComponentComponent } from './Components/Cars/cars-component/cars-component.component';
import { AccidentComponentComponent } from './Components/Accidents/accident-component/accident-component.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { AboutUsComponentComponent } from './Components/about-us-component/about-us-component.component';
import { ContactUsComponentComponent } from './Components/contact-us-component/contact-us-component.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewClientComponent } from './Components/People/new-client/new-client.component';
import { EditClientComponent } from './Components/People/edit-client/edit-client.component';
import { ClientscarsComponent } from './Components/Cars/clientscars/clientscars.component';
import { NewCarComponent } from './Components/Cars/new-car/new-car.component';
import { CarsAccidentComponent } from './Components/Accidents/cars-accident/cars-accident.component';
import { NewAccidentComponent } from './Components/Accidents/new-accident/new-accident.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponentComponent,
    CarsComponentComponent,
    AccidentComponentComponent,
    HomeComponentComponent,
    AboutUsComponentComponent,
    ContactUsComponentComponent,
    NavComponent,
    FooterComponent,
    NewClientComponent,
    EditClientComponent,
    ClientscarsComponent,
    NewCarComponent,
    CarsAccidentComponent,
    NewAccidentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
