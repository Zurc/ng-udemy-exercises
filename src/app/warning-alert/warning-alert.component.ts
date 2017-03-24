import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>You are warned here. Alert!!!</p>
  `,
  styles: [`
    p {
      background: lightpink;
      padding: 20px;
      border: 1px solid red;
    }
  `]
})
export class WarningAlertComponent {

}