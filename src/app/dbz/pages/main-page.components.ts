import { Component, Input,} from '@angular/core';
import { dbzServiceS } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html',
})

export class MainPageComponent {

  constructor(private dbzService: dbzServiceS){ // servicio privado es buena practica

    }

    get characeres(): Character[]{
      return [...this.dbzService.character];
  }

  onDeleterCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }




  onNewCharacter(Character:Character): void{
    this.dbzService.addCharacter(Character);
  }

}
