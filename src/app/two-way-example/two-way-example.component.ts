import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-example',
  templateUrl: './two-way-example.component.html',
  styleUrls: ['./two-way-example.component.css']
})
export class TwoWayExampleComponent implements OnInit {

  username : string;

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    this.username = "";
  }

}
