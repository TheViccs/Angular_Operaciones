import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importación para funcionamineto de ngModele en app.component.html
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
