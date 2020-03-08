import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {

  toggleButton : boolean = false;
  count  = 0;
  toggleStatusArray = []

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph(){
    this.toggleButton = !this.toggleButton;


      this.toggleStatusArray.push(this.count++);
  }

}
