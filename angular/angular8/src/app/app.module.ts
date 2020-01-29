import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LearnModeComponent } from './learn-mode/learn-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnModeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
