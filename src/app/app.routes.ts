import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { AuthGuard, UserRolesResolve } from '@wize/quiver-auth';

@NgModule({
  imports: [
    RouterModule.forRoot([
        /*
        {
            path: '',
            canActivate: [AuthGuard, UserRolesResolve],
            loadChildren: '../../../node_modules/@wize/quiver-admin/quiver-admin.module#QuiverAdminModule'
         },
         */
        {
          path: '',
          canActivate: [AuthGuard, UserRolesResolve],
          loadChildren: '../../../node_modules/@wize/rapidui-core/rapidui.module#RapiduiModule'
        },
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
