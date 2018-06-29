import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { Angularip2Service } from './angularip2.service';
import { AppComponent } from './app.component';
import { Angularip2Component } from './angularip2/angularip2.component';

@NgModule({
  declarations: [
    AppComponent,
    Angularip2Component

  ],
  imports: [
    BrowserModule,
    HttpModule
    FormsModule
  ],
  providers: [Angularip2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
