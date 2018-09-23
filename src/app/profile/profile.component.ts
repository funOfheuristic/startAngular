import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId;
  childData;
  name = true;
  date = new Date();
  numVal = 2000;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( 
      params =>  this.userId = params.userId
    );
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    console.log("in profile");
    return window.confirm('Discard changes?');
  }

  dispalyChildValue(event){
    this.childData = event;
  }

}
