import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassModule } from './sheard/passComponent/pass/pass.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
