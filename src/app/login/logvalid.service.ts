import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogvalidService {
public isLogin: boolean = false;

login(){
  this.isLogin = true;
}

logout(){
  this.isLogin = false;
}

public correctPassword : string;
public correctUsername : string;
public errorMessage : string;
public redirectUrl : string;



  constructor() {
    this.correctUsername = 'qwertz';
    this.correctPassword = 'mein';
    this.errorMessage = "";
    this.redirectUrl = "";

  }

  CheckInfo(username:string, password:string): boolean{


      if(username == ''){
        // console.log("Error username darf nicht leer");
        this.errorMessage = "Error username darf nicht leer";
        console.log(this.errorMessage);
        this.isLogin = false;
      }
      else if (username.length<4){
          console.log("Error username darf min 4 Buchstaben");
          this.errorMessage = "Error username darf min 4 Buchstaben";
          this.isLogin = false;
      }
      else if (username == this.correctUsername){
        console.log(username);
        this.isLogin = false;
      }
      else if (username != this.correctUsername){
        console.log("Der Username ist falsch");
        this.errorMessage = "Der Username ist falsch";
        this.isLogin = false;
      }

      if(password == ""){
        console.log("Error password darf nicht leer");
        this.errorMessage = "Error password darf nicht leer";
        this.isLogin = false;
      }
      else if (password.length<4){
        console.log("Error password darf min 4 Buchstaben");
        this.errorMessage = "Error password darf min 4 Buchstaben";
        this.isLogin = false;
      }

      // else if (this.correctPassword != password){
      //   console.log("Das Password ist falsch");
      //   this.errorMessage = "Das Password ist falsch";
      //   this.isLogin = false;
      // }
      else if (this.correctPassword == password){
       console.log(password);
       this.isLogin = true;
      }

      if(this.correctPassword == password && username == this.correctUsername) {
        this.errorMessage = "";

        return this.isLogin = true;
      } else {
        this.errorMessage;
        return this.isLogin = false;
      }


  }
}


