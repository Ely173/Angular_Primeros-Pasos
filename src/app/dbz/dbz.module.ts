import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPageComponent } from './pages/main-page.components';
import { ListaComponent } from './components/lista/lista.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent, ListaComponent, AddCharacterComponent
  ]
  ,
  exports:[MainPageComponent]
  ,
  imports: [
    CommonModule,
    FormsModule


  ]
})
export class DbzModule { }
