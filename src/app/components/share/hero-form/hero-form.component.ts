import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';

import { POWERS } from '../../../constants';
import { HeroForm } from '../../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  powers = POWERS;
  heroForm: FormGroup;
  @Output() newHeroEvent = new EventEmitter<HeroForm>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      alterEgo: '',
      power: ['', [Validators.required]],
    });
  }

  onSubmit(ngHeroForm: NgForm): void {
    this.newHeroEvent.emit(this.heroForm.value);
    this.heroForm.reset();
    ngHeroForm.resetForm();
  }

  get name(): FormControl {
    return this.heroForm.get('name') as FormControl;
  }

  get alterEgo(): FormControl {
    return this.heroForm.get('alterEgo') as FormControl;
  }

  get power(): FormControl {
    return this.heroForm.get('power') as FormControl;
  }

  // TODO: Remove this when we're done
  get diagnostic(): string {
    return JSON.stringify(this.heroForm.value);
  }
}
