import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

@Injectable()
export class CoreService {
  private availableModules: string[] = ['roles', 'users', 'organizations', 'templates'];
  private selectedModules: string[] = [];

  constructor(private router: Router) {
  }

  getSidebarItems(): any[] {
    const sidebarItems: any[] = [];
    const icons = ['people', 'person', 'account_balance', 'description'];
    this.selectedModules.forEach(module => {
      sidebarItems.push({
        name: module.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '),
        route: module,
        icon: icons.shift()
      });
    });
    return sidebarItems;
  }

  private useModules(modules: string[] = [], customRoutes: Routes = []): void {
    this.availableModules.forEach(module => {
      if (modules.length === 0 || modules.indexOf(module) !== -1) {
        this.selectedModules.push(module);
      }
    });

    // this.setRoutes(customRoutes);
  }

  private setRoutes(customRoutes: Routes = []): void {
    const routes = [...customRoutes];
    const root: Route = {
      path: 'admin',
      component: LayoutComponent,
      children: routes
    };

    this.selectedModules.forEach(module => {
      routes.push({
        path: module,
        loadChildren: `./modules/${module}`
      });
    });

    this.router.resetConfig([root]);
  }
}
