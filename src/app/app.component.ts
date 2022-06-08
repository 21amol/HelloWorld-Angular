import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'HelloWorld-Angular';
  title = 'Hello from BridgeLabz';
  imgUrl ="./assets/BridgeLabz-logo.jpg"; 
  url = "https://www.bridgelabz.com";
  userName: string = " Amol";


onclick($event) {
  console.log("Save Button is Clicked", $event);
  window.open(this.url, "_blank");
 }
}

