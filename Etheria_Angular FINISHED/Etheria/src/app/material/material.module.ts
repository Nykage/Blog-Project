import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
