import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  toggleEvent:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  
  toggleNavbar(){
    if(this.toggleEvent==false){
      this.toggleEvent=true;
    }
    else{
      this.toggleEvent=false;
    }
  }
}
