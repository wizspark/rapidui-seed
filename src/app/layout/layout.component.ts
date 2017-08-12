import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaService } from '@rapidui/quiver-core';
//import { AuthService } from '@wize/quiver-auth';
import { HttpClient } from '@angular/common/http';
import { TitleService } from '@wize/rapidui-common';

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
              private media: MediaService,
              private changeDetectorRef: ChangeDetectorRef,
              private titleService: TitleService,
              private http: HttpClient) {

    this.titleService.observer.next('Rapidui');

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
    //this.authService.logout();
  }
}
