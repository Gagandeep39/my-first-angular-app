import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Property Binding
  buttonDisabled: boolean = true;

  title = "my-first-app";


  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000);

    setTimeout(this.testMethod, 4000);

  }

  //Property Binding
  testMethod() {
    this.buttonDisabled = true;
  }

  //Event Binding
  eventString: string = "Not yet Clicked";
  inputEventString: string = "";
  executeOperation() {
    this.eventString = "Clicked";
  }
  testEvent(event: Event) {
    // alert(event.target.value); //will give error since value isnt defined in target and hence well typecast it
    this.inputEventString = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  //TwoWay Binding
  twoWay: string = "Initial Value";

  //Structure direcive
  isVisible = true;
  toggle() {
    if (this.isVisible) this.isVisible = false;
    else this.isVisible = true;
  }

  //attribute directive
  getColor() {
    return Math.random() > 0.5 ? "green" : "red";
  }

  attributeToggle = true;
  toggleAttribute(){
    
    if(this.attributeToggle)
      this.attributeToggle = false;
      else this.attributeToggle = true;
  }


  //forDirective
  itemArray = [];
  addItem(){
    this.itemArray.push("Item");
  }
}
