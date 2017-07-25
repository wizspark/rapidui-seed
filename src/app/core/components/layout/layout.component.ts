import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class LayoutComponent implements AfterViewInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
  }
}
