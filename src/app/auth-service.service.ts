import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }



 users: { email: string, password: string, userName: string }[] = [
  { "email": "abc@gmail.com", "password": "123456", "userName": "Sankarshan"},
  { "email": "def@gmail.com", "password": "789456", "userName": "Narayan" },
  { "email": "ghi@gmail.com", "password": "456456", "userName": "Shyam" },
  { "email": "jkl@gmail.com", "password": "963456", "userName": "Vinay Kumar" },
  { "email": "mno@gmail.com", "password": "741456", "userName": "Narayan Mishra" },
];

  isLogin = false;

  login(credentials){
    for(var i =0; i<this.users.length;i++){
    if(this.users[i].email === credentials.email && this.users[i].password === credentials.password){
      localStorage.setItem("User",this.users[i].userName);
      this.isLogin = true;
      return true;
    }
    // else{
    //   return false;
    // }
  }
  }
  checkIsLoggedIn(){
    return this.isLogin;
  }

  getCurrentUser(){
    return localStorage.getItem("User");
  }
}
