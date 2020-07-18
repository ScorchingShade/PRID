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
import { ProductsComponent } from './products/products.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule, ShowOnDirtyErrorStateMatcher } from '@angular/material'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { PayDialogComponent } from './order-component/pay-dialog/pay-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { ContactComponentComponent } from './contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    OrderComponentComponent,
    FooterComponentComponent,
    LandingPageComponent,
    ProductsComponent,
    PayDialogComponent,
    PayDialogComponent,
    ProductsComponent,
    ContactComponentComponent

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
    MatToolbarModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule    
      
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent],
  entryComponents: [PayDialogComponent],
})
export class AppModule { }
