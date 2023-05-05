import { Component, EventEmitter } from '@angular/core';
import { Heroes } from 'src/app/Interfaces/heroes';
import { HEROES } from 'src/app/Mock-Data/mock-heroes';

@Component({
  selector: 'app-heroes-lists',
  templateUrl: './heroes-lists.component.html',
  styleUrls: ['./heroes-lists.component.css']
})
export class HeroesListsComponent {

  // @Output() addItemEvent = new EventEmitter<string>();

  heroes = HEROES;

  hero: Heroes = {
    id: 1,
    name: 'Iron Man'
  }
  
  selectedHero?: Heroes;
  onSelect(hero: Heroes): void {
  this.selectedHero = hero;
  }
 

}
