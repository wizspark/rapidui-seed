import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from '../environment';
import { getDirection } from '../utilities/direction';
import { RapiduiConfig } from '@wize/rapidui-core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
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

    // set direction
    this.dir = getDirection();
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
