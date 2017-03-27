import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  pass = false;
  clicksArray = [];
  // white: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.pass = !this.pass;
    this.clicksArray.push(1); 
    console.log(this.clicksArray.length);
    // this.white = this.clicksArray.length > 4 ? true : false;
  }

  tellMe() {
    return this.clicksArray.length > 4 ? 'white' : '';
  }
}
