import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  emmitString(data){
    this.stringOutput.emit(data);
  }

}
