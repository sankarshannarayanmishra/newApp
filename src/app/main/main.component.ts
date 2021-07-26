import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(public nav: NavService) {
 
   }

  ngOnInit() {
    this.nav.hide();
  // this.nav.doSomethingElseUseful();
  }
  
  myControl = new FormControl();
  options: string[] = ['Sankarshan', 'Narayan', 'Shyam', 'Vinay Kumar', 'Narayan Mishra'];
}
