import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const MODULES = [
  // Angular modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  // Material modules
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatBadgeModule,
  MatSelectModule,
  MatListModule,
];

@NgModule({
  declarations: [HeroFormComponent, HeroListComponent],
  imports: MODULES,
  exports: [...MODULES, HeroFormComponent, HeroListComponent],
})
export class ShareModule {}
