import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NavService } from '../nav.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  isLoggedIn = false;
  currentUser : string;

  constructor(authService:AuthServiceService, public nav: NavService) {
    this.isLoggedIn = authService.checkIsLoggedIn();
    this.currentUser = authService.getCurrentUser()
   }

  ngOnInit() {
    this.nav.show();
  // this.nav.doSomethingElseUseful();
  }

}
