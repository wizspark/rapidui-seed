import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { LayoutComponent } from './layout/layout.component';
import { rapiduiRoutes } from '@wize/rapidui-core';
import { adminRoutes } from '@wize/quiver-admin';

rapiduiRoutes[0].children.unshift(...adminRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: LayoutComponent,
          // canActivate: [AuthGuard, UserRolesResolve],
          children: [
            ...rapiduiRoutes
          ]
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
