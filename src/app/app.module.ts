import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { PayDialogComponent } from './order-component/pay-dialog/pay-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    OrderComponentComponent,
    FooterComponentComponent,
    LandingPageComponent,
    PayDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    MatRadioModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PayDialogComponent],
})
export class AppModule { }
