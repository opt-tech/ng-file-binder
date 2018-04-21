import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input.directive';
import { DragDirective } from './drag.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InputDirective, DragDirective],
  exports: [InputDirective, DragDirective]
})
export class FbModule {}
