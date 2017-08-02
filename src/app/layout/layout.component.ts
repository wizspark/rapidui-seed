import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import { environment } from '../environment';
import { RapiduiConfig } from '@wize/rapidui-core';
import { AuthService } from '@wize/quiver-auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  routes: Object[];
  views: Array<any>;

  constructor(private iconRegistry: MdIconRegistry,
              private domSanitizer: DomSanitizer,
              public media: TdMediaService,
              private changeDetectorRef: ChangeDetectorRef,
              private rapiduiConfig: RapiduiConfig,
              private http: HttpClient,
              private authService: AuthService) {

    this.rapiduiConfig.SERVER_URI = environment.host;
    this.rapiduiConfig.AUTH0_OPTIONS = environment.auth0Options;

    // Register svgs
    this.iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this.domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata.svg'));
  }

  ngOnInit() {
    this.http.get('/app/views/views.json').subscribe((res: any[]) => {
      this.views = res;
      this.formRoutes();
    });
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }

  formRoutes() {
    this.routes = [];
    this.views.forEach(r => {
      this.routes.push({
        icon: 'view_quilt',
        route: r.route,
        title: r.viewName
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}
