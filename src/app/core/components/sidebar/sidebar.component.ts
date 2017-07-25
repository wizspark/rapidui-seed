import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {

  sidebarItems: any[];

  constructor(private coreService: CoreService) {
  }

  ngOnInit() {
    this.sidebarItems = this.coreService.getSidebarItems();
  }
}
