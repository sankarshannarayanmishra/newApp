import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  visible: boolean;
  loginVisible:boolean;

  constructor() { this.visible = false; this.loginVisible=false; }

  hide() { this.visible = false;this.loginVisible=true; }

  show() { this.visible = true;this.loginVisible=false; }

  toggle() { this.visible = !this.visible; }

  // doSomethingElseUseful() { }
}
