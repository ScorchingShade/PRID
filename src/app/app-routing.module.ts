import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponentComponent } from './order-component/order-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'order', component: OrderComponentComponent },
  { path: 'index', component: LandingPageComponent },
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',anchorScrolling: 'enabled', })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routing = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' });

//export const routingComponents = [ OrderComponentComponent]
