import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { of } from 'rxjs';

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

    this.clicks = fromEvent(this.button.nativeElement, 'click');

    let mouseEvent  = this.clicks.subscribe(
      mouse => console.log(mouse.clientX, mouse.clientY)
    )
    
    setTimeout(() =>{
      mouseEvent.unsubscribe();
    },5000)

    const arr = [1,2,3,4,5,5,6];
    const obj = {
      name: 'Subrat',
      from: 'Bangalore'
    };
    let stringArray = ['hi', 'i' ,'am', 'Biku'];

    let obs = of(23, arr, obj, 'Subart' , stringArray, {});

    obs.subscribe(
      data => console.log(data)
    )

    setTimeout(() =>{
      obs.subscribe(
        data => console.log(data)
      )
    },1000)

    let obser = new Observable((observer) => {
      observer.next("The 1st emit");
      setTimeout(() => {
        observer.next("The 2nd emit");
        // observer.complete();
        observer.error("oops something went wrong");
      }, 3000)
    });

    
    

    // obser.subscribe(
    //   // {
    //   // next(data){console.log(data); },
    //   // error(err){console.error(err); }
    //   // }
    //   data => {
    //     console.log(data);
    //   },err => {
    //     console.error(err);
    //   },() => console.log("The Observable is complete")
    // )
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    console.log("in profile");
    return window.confirm('Discard changes?');
  }

  dispalyChildValue(event){
    this.childData = event;
  }

  



  



















  multicastSequenceSubscriber() {
    const arr = [1,2,3,4,5,6,7];
    const observers = [];
    // Still a single timeoutId because there will only ever be one
    // set of values being generated, multicasted to each subscriber
    let timeoutId;
  
    // Return the subscriber function (runs when subscribe()
    // function is invoked)
    return (observer) => {
      observers.push(observer);
      // When this is the first subscription, start the sequence
      if (observers.length === 1) {
        timeoutId = this.runSequence({
          next(val) {
            // Iterate through observers and notify all subscriptions
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            // Notify all complete callbacks
            observers.slice(0).forEach(obs => obs.complete());
          }
        }, arr, 0);
      }
  
      return {
        unsubscribe() {
          // Remove from the observers array so it's no longer notified
          console.log("called");

          observers.splice(observers.indexOf(observer), 1);
          // If there's no more listeners, do cleanup
          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      };
    };
  }

  multipleSubscriber() {
    const arr = [1, 2, 3, 4, 5, 6];
    let timeoutId;
    return (observer) => {
      this.runSequence(observer,arr,0);

      return {unsubscribe() {
        console.log("timeout called");
        clearTimeout(timeoutId);
      }};
    }
  }

  runSequence(observer, arr, index) {
    return setTimeout(() => {
      observer.next(arr[index]);
      if (index === arr.length - 1) {
        observer.complete();
      } else {
        this.runSequence(observer, arr, ++index);
      }
    }, 1000);
  }

}
