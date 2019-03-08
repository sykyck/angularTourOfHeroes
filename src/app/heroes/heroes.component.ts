import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mockheroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  public selectedhero:Hero = new Hero();
  public heroes:Hero[] = [];

  constructor() { 
    this.selectedhero.name="Windstorm";
    this.selectedhero.id = 2;
  }

  ngOnInit() {
  }

}
