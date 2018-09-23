import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActiveChildService implements CanActivateChild{

  constructor() { }

  canActivateChild(){
    alert("in side a child");
    return true;
  }
}
