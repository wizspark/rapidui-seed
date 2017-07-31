import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@wize/quiver-auth';
import { AdminModule } from '@wize/quiver-admin';
import { APP_PROVIDERS } from './root/core.resolver';
import { environment } from './environment';
import { AppRoutingModule } from './app.routes';
import { RapiduiModule } from '@wize/rapidui-core';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import {
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCoreModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // CommonModule,
    // FormsModule,
    BrowserModule,
    HttpModule,
    JsonpModule,
    /** Material Modules */
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdTabsModule,
    MdToolbarModule,
    MdGridListModule,
    MdTooltipModule,

    MdInputModule,
    MdSelectModule,
    MdButtonToggleModule,
    MdSlideToggleModule,
    MdProgressBarModule,
    MdAutocompleteModule,

    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentCommonModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentFileModule,
    CovalentChipsModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentMessageModule,

    /** Rapidui Modules */
    AuthModule.forRoot(environment),
    AdminModule.forRoot(APP_PROVIDERS),
    RapiduiModule,

    /** App Modules */
    AppRoutingModule
  ],
  providers: [
    SelectivePreloadingStrategyService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
