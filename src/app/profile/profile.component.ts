import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

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

  @ViewChild('ob') button;
  clicks: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( 
      params =>  this.userId = params.userId
    );

    // this.clicks = fromEvent(this.button.nativeElement, 'click');

    // let mouseEvent  = this.clicks.subscribe(
    //   mouse => console.log(mouse.clientX, mouse.clientY)
    // )

    // setTimeout(() =>{
    //   mouseEvent.unsubscribe();
    // },5000)

    let obser = new Observable((observer) => {
      observer.next("The 1st emit");
      setTimeout(() => {
        observer.next("The 2nd emit");
        // observer.complete();
        observer.error("oops something went wrong");
      }, 3000)
    });

    let sub = obser.subscribe(
      // {
      // next(data){console.log(data); },
      // error(err){console.error(err); }
      // }
      data => {
        console.log(data);
      },err => {
        console.error(err);
      },() => console.log("The Observable is complete")
    )

    setTimeout(() => { sub.unsubscribe(); }, 10000);
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
