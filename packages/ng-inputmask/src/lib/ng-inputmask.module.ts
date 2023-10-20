import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputmaskDirective } from './inputmask.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InputmaskDirective],
  exports: [InputmaskDirective],
})
export class NgInputmaskModule {}
