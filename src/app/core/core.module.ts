import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule } from '@covalent/core';
import {
  MdIconModule, MdListModule, MdMenuModule, MdSidenavModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CoreService } from './services/core.service';

@NgModule({
  imports: [
    CommonModule,
    MdMenuModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdTooltipModule,
    MdToolbarModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  exports: [
    LayoutComponent,
    SidebarComponent
  ],
  providers: [
    CoreService
  ]
})
export class CoreModule {
}
