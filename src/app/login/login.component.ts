import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogvalidService } from './logvalid.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'aufgabe';
  errorMsg = this.logval.errorMessage;
  @ViewChild('usermodel')
  userModel?: ElementRef

  @ViewChild('password')
  password?: ElementRef


  constructor(private logval: LogvalidService, private router: Router){

  }

  click(){

    const loggedIn = this.logval.CheckInfo(this.userModel?.nativeElement.value, this.password?.nativeElement.value);
    console.log(loggedIn);
    if(loggedIn == true) {

      this.router.navigateByUrl('logged');
    }
  }



  ngOnInit(): void {
  }

}











