import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin : boolean;

  constructor(private router:Router, private authService:AuthServiceService) { }

 
  submit(credentials){
    this.authService.login(credentials);
    if(this.authService.login(credentials)){
      this.router.navigate(['/gallery']);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
  }


}
