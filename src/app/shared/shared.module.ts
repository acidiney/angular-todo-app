import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithIconComponent } from './input-with-icon/input-with-icon.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [InputWithIconComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [InputWithIconComponent, ButtonComponent]
})
export class SharedModule { }
