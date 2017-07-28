import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: '', loadChildren: '../../../node_modules/platform/rapidui-core/rapidui.module#RapiduiModule'},
        {path: '**', redirectTo: '/'}
      ],
      {
        useHash: true,
        preloadingStrategy: SelectivePreloadingStrategyService
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
