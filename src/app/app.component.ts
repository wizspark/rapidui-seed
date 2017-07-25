import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: Http) {
  }

  ngOnInit() {
    /*this.http.get(`views/views.json`)
      .map(res => res.json())
      .subscribe(views => {
        console.log(views);
      });*/
  }
}
