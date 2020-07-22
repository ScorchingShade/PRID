import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.css']
})
export class ContactComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hoverEvent(){
    var divevent=document.getElementById("divhover");
    divevent.className='text-pop-up-top';
  }

}
