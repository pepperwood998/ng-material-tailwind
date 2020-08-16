import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];

  constructor() {}

  ngOnInit(): void {}
}
