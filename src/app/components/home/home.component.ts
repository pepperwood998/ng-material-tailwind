import { Component, OnInit } from '@angular/core';

import { Hero, HeroForm } from '../../models/hero';
import { POWERS } from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Dr IQ',
      power: POWERS[0],
      alterEgo: 'Chuck Overstreet',
    },
    {
      id: 2,
      name: 'Elastic Girl',
      power: POWERS[1],
      alterEgo: 'Drunken Mistress',
    },
  ];

  addHero(hero: HeroForm): void {
    this.heroes.push({
      id: Math.max(...this.heroes.map(h => h.id)) + 1,
      ...hero,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
