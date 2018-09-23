import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../Shared/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image= "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  constructor(public http: HttpService) { }

  ngOnInit() {
    console.log(this.http.test);
  }

  changeImage(){
    this.http.test = "changed";
    this.image = "https://images.pexels.com/photos/635529/pexels-photo-635529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  }

}
