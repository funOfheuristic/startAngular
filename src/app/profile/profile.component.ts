import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { of } from 'rxjs';
import { share } from 'rxjs/operators';

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
      params => this.userId = params.userId
    );

    this.clicks = fromEvent(this.button.nativeElement, 'click');

    let mouseEvent = this.clicks.subscribe(
      mouse => console.log(mouse.clientX, mouse.clientY)
    )

    setTimeout(() => {
      mouseEvent.unsubscribe();
    }, 5000)

    const arr = [1, 2, 3, 4, 5, 5, 6];
    const obj = {
      name: 'Subrat',
      from: 'Bangalore'
    };
    let stringArray = ['hi', 'i', 'am', 'Biku'];

    let obs = of(23, arr, obj, 'Subart', stringArray, {});

    // obs.subscribe(
    //   data => console.log(data)
    // )

    // setTimeout(() => {
    //   obs.subscribe(
    //     data => console.log(data)
    //   )
    // }, 1000)

    let obser = new Observable((observer) => {
      observer.next("The 1st emit");
      setTimeout(() => {
        observer.next("The 2nd emit");
        // observer.complete();
        observer.error("oops something went wrong");
      }, 3000)
    });

    // // Create a new Observable that will deliver the above sequence
    const SequenceOld = new Observable(this.multipleSubscriber());

    const Sequence = SequenceOld.pipe(share());

    // Subscribe starts the clock, and begins to emit after 1 second
    // Sequence.subscribe({
    //   next(num) { console.log('1st subscribe: ' + num); },
    //   complete() { console.log('1st finished.'); }
    // });

    // // After 1 1/2 seconds, subscribe again (should "miss" the first value).
    // setTimeout(() => {
    //   Sequence.subscribe({
    //     next(num) { console.log('2nd subscribe: ' + num); },
    //     complete() { console.log('2nd finished.'); }
    //   });
    // }, 3000);

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

  multipleSubscriber() {
    const arr = [1, 2, 3, 4, 5, 6];
    
    return (observer) => {
      this.run(observer, arr, 0);
      return {
        unsubscribe() {
        }
      };
    }
  }

  run(observer, arr, index) {
    return setTimeout(() => {
      observer.next(arr[index]);
      if (index === arr.length - 1) {
        observer.complete();
      } else {
        this.run(observer, arr, ++index);
      }
    }, 1000);
  }

  multiCastSubscriber() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const observers = [];
    let timeoutId;

    return (observer) => {
      observers.push(observer);
      // When this is the first subscription, start
      if (observers.length === 1) {
        timeoutId = this.run({
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
          observers.splice(observers.indexOf(observer), 1);
          // If there's no more listeners, do cleanup
          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      };
    };
  }


  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    console.log("in profile");
    return window.confirm('Discard changes?');
  }

  dispalyChildValue(event) {
    this.childData = event;
  }

  

























  
  

}
