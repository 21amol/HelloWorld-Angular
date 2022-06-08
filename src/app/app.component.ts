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
  userName: string = "";
  nameError: string = "";


onclick($event) {
  console.log("Save Button is Clicked", $event);
  window.open(this.url, "_blank");
 }

onInput($event) {
  console.log("Change Event Occured", $event.data);
  var nameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
  if (nameRegex.test(this.userName)) {
    this.nameError = "";
    return;
  }
  this.nameError = "Invalid Name!!!";
 }
}

