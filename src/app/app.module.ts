import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
//import { AuthModule } from '@wize/quiver-auth';
//import { AdminModule } from '@wize/quiver-admin';
import { APP_PROVIDERS } from './services/core.resolver';
import { environment } from './environment';
import { AppRoutingModule } from './app.routes';
import { RapiduiModule } from '@wize/rapidui-core';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import {
  QuiverChipsModule,
  QuiverCommonModule,
  QuiverDataTableModule,
  QuiverDialogsModule,
  QuiverExpansionPanelModule,
  QuiverFileModule,
  QuiverJsonFormatterModule,
  QuiverLayoutModule,
  QuiverLoadingModule,
  QuiverMediaModule,
  QuiverMenuModule,
  QuiverMessageModule,
  QuiverNotificationsModule,
  QuiverPagingModule,
  QuiverSearchModule,
  QuiverStepsModule
} from '@rapidui/quiver-core';
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
import { QuiverHttpModule } from '@rapidui/quiver-http';
import { QuiverHighlightModule } from '@rapidui/quiver-highlight';
import { QuiverMarkdownModule } from '@rapidui/quiver-markdown';
import { QuiverDynamicFormsModule } from '@rapidui/quiver-forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { RapiduiCommonModule, RAPIDUI_CONFIG, RapiduiConfig, Auth0Config } from '@wize/rapidui-common';
const rapiduiConfig: RapiduiConfig = {
  SERVER_URI: environment.host,
  AUTH0_OPTIONS: <Auth0Config>{
    clientId: environment.auth0Options.clientId,
    domain: environment.auth0Options.domain
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // CommonModule,
    // FormsModule,
    BrowserModule,
    HttpClientModule,
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

    /** Quiver Modules */
    QuiverLayoutModule,
    QuiverExpansionPanelModule,
    QuiverNotificationsModule,
    QuiverMenuModule,
    QuiverMediaModule,
    QuiverHttpModule.forRoot(),
    QuiverHighlightModule,
    QuiverMarkdownModule,
    QuiverDynamicFormsModule,
    QuiverCommonModule,
    QuiverStepsModule,
    QuiverDialogsModule,
    QuiverLoadingModule,
    QuiverSearchModule,
    QuiverPagingModule,
    QuiverFileModule,
    QuiverChipsModule,
    QuiverJsonFormatterModule,
    QuiverDataTableModule,
    QuiverMessageModule,

    /** Rapidui Modules */
    //AuthModule.forRoot(environment),
    //AdminModule.forRoot(APP_PROVIDERS),
    RapiduiModule,
    RapiduiCommonModule,

    /** App Modules */
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: RAPIDUI_CONFIG, useValue: rapiduiConfig},
    SelectivePreloadingStrategyService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
