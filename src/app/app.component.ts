import { Component } from '@angular/core';
import { HttpService } from './Shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public http: HttpService) { }
  title = 'funApp !!!!';
}
