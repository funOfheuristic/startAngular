import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate{

  constructor() { }

  canActivate(){
    //alert("you are in profile");
    return true;
  }
  
}
