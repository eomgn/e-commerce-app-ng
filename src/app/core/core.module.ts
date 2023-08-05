import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CoreRoutingModule, MaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
