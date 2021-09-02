import { NgModule } from '@angular/core';
import { CurrencyFlagComponent } from './currency-flag.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../directive/click-outside.directive';

@NgModule({
  declarations: [
    CurrencyFlagComponent,
    FilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CurrencyFlagComponent
  ]
})
export class CurrencyFlagModule { }
