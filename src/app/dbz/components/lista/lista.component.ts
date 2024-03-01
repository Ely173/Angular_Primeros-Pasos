import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public characterList: Character[]=[
    {
      name:'Trunks',
      power: 10
    }
  ]

  @Output()
  onDelete: EventEmitter<string>= new EventEmitter(); // onDelete: = new EventEmitter(number); es lo ismo funciona igual

  onDeleteCharacter(id?: string):void{
    //emitir el ID
    if(!id)return;
    this.onDelete.emit(id);
  }


}
