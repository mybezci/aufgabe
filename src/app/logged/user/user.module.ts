import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LogvalidService } from 'src/app/login/logvalid.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class UserModule {
  constructor(private logvalid: LogvalidService, private router: Router){
    this.checkLogin();

  }


  async checkLogin(){
    if (!(await this.logvalid.isLogin)) {
      await this.router.navigate(['login']);
    }else {
      await this.router.navigate(['user']);
    }
  }

}
