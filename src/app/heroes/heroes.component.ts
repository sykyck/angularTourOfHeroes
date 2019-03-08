import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public hero:Hero = new Hero();
  constructor() { 
    this.hero.name="Windstorm";
    this.hero.id = 2;
  }

  ngOnInit() {
  }

}
