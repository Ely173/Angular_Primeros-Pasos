import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

@Output() //
onNewCharacter: EventEmitter<Character>= new EventEmitter();// extancia para emitir u evento

  public character: Character={  // se tiene que inicializar para poderla utilizar
      name:'',
      power:0
  };

  emiteCharacter(): void{
     console.log(this.character);// imprimir el Caracter
     if(this.character.name.length===0) return; // si viene el nombre vacio que no haga nada

     this.onNewCharacter.emit(this.character);// enviar los caracteres del input

    this.character={name:"",power:undefined}; //limpiar el imput




    //let valor: string=this.character.name + this.character.power
    //console.table(valor);
  }



}
