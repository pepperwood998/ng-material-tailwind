import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeroForm } from '../../../models/hero';
import { POWERS } from '../../../constants';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  powers = POWERS;
  submitted = false;
  error = false;

  name = '';
  alterEgo = '';
  power = '';
  @Output() newHeroEvent = new EventEmitter<HeroForm>();

  onSubmit(heroForm: NgForm): void {
    if (!this.name || !this.power) {
      this.error = true;
      return;
    }

    this.newHeroEvent.emit({
      name: this.name,
      alterEgo: this.alterEgo,
      power: this.power,
    });
    heroForm.resetForm();
    this.error = false;
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic(): string {
    return JSON.stringify({
      name: this.name,
      alterEgo: this.alterEgo,
      power: this.power,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
