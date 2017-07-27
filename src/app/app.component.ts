import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import { environment } from './environment';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RapiduiConfig } from '@wize/rapidui-core/config';

@Component({
  selector: 'app-seed',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  routes: Object[];
  dir: string;
  views: Array<any>;

  constructor(private iconRegistry: MdIconRegistry,
              private domSanitizer: DomSanitizer,
              public media: TdMediaService,
              private changeDetectorRef: ChangeDetectorRef,
              private rapiduiConfig: RapiduiConfig,
              private http: Http,
              private router: Router) {

    this.rapiduiConfig.SERVER_URI = environment.host;
    this.rapiduiConfig.AUTH0_OPTIONS = environment.auth0Options;

    // Register svgs
    this.iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this.domSanitizer.bypassSecurityTrustResourceUrl('app/assets/icons/teradata.svg'));
  }

  ngOnInit() {
    this.http.get('/app/views/views.json').subscribe((res) => {
      this.views = res.json();
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
}
