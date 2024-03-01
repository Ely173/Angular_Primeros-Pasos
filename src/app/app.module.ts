import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';


import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CounterModule,
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
