import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{

  pass = false;
  clicksArray = [];

  onToggleDetails() {
    this.pass = !this.pass;
    this.clicksArray.push(this.clicksArray.length + 1); 
    console.log(this.clicksArray.length);
  }

  tellMe() {
    return this.clicksArray.length > 4 ? 'white' : '';
  }
}
