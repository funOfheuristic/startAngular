import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../Shared/http.service';
import { retry, retryWhen, delayWhen, scan } from 'rxjs/operators';
import { timer, forkJoin } from 'rxjs';

@Component({
  selector: 'app-peofile-child',
  templateUrl: './peofile-child.component.html',
  styleUrls: ['./peofile-child.component.css']
})
export class PeofileChildComponent implements OnInit {

  @Input()
  profileData: String = "";

  @Output()
  stringOutput: EventEmitter<String> = new EventEmitter<String>();

  someData: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    let serverData = this.httpService.httpGet("http://localhost:3000/data").pipe(
      retryWhen(err => err.pipe(
        scan(retryCount => {
          if (retryCount > 5) throw err;
          else {
            retryCount++;
            return retryCount;
          }
        }, 0),
        delayWhen(() => timer(1000))
      ))
    )

    serverData.subscribe(
      data => {
        this.someData = data;
        console.log(JSON.stringify(this.someData, null, 2));
      }, err => {
        console.error(err);
      }, () => console.log("done")
    )

    let serverData1 = this.httpService.httpGet("http://localhost:3000/data");
    let serverData2 = this.httpService.httpGet("http://localhost:3000/data");
    let serverData3 = this.httpService.httpGet("http://localhost:3000/data");
    let serverData4 = this.httpService.httpGet("http://localhost:3000/data");

    let multiCall = forkJoin(serverData1,serverData2, serverData3, serverData4);

    multiCall.subscribe(
      data => {
        console.log(JSON.stringify(data[0], null, 2));
      },err => {
        console.error(err);
      }, () => console.log("done")
    )
  }




  emmitString(data) {
    this.stringOutput.emit(data);
  }

}
