import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { FormsModule } from "@angular/forms";
import { TwoWayExampleComponent } from './two-way-example/two-way-example.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    TwoWayExampleComponent,
    DirectiveExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
