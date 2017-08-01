import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { LayoutComponent } from './layout/layout.component';
import { rapiduiRoutes } from '@wize/rapidui-core';
import { AuthGuard } from '@wize/quiver-auth';
import { adminRoutes } from '@wize/quiver-admin';

rapiduiRoutes[0].children.unshift(...adminRoutes);

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: LayoutComponent,
          canActivate: [AuthGuard/*, UserRolesResolve*/],
          children: [
            // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // { path: 'dashboard', component: DashboardComponent },
            ...rapiduiRoutes
          ]
        },
        { path: '**', redirectTo: '/' }
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
