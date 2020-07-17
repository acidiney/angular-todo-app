import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderInputComponent } from './header/header-input/header-input.component';
import { HeaderTabsComponent } from './header/header-tabs/header-tabs.component';

@NgModule({
  declarations: [
    AccountComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderInputComponent,
    HeaderTabsComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class AccountModule {}
