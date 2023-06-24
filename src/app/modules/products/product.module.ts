import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components';

const COMPONENTS = [ProductComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
})
export class ProductModule {}
