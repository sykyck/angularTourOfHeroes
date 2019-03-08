import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { getRootComponents } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public selectedHero:Hero;
  public heroes:Hero[] = [];

  constructor() { 
    this.heroes.push({ id: 11, name: 'Mr. Nice' });
    this.heroes.push({ id: 12, name: 'Narco' });
    this.heroes.push({ id: 13, name: 'Bombasto' });
    this.heroes.push({ id: 2, name: 'Windstorm' });
  }

  onSelect(clickedHero:Hero):void{
     this.selectedHero = clickedHero;
  }

  ngOnInit() {
  }

}
