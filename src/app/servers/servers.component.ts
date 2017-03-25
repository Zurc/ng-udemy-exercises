import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Testserver';

  constructor() { 
    // console.log(this)
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created!. Name: " + this.serverName
  }

  onUpdateServerName(event: any) {
    // console.log(event)
    this.serverName = event.target.value;
  } 
}
