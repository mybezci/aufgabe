import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LogvalidService } from './logvalid.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../login/guard/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule {

  constructor(private logvalid: LogvalidService, private router: Router){
    this.checkLogin();

  }


  async checkLogin(){
    if (!(await this.logvalid.isLogin)) {
      await this.router.navigate(['login']);
    }else {
      await this.router.navigate(['logged']);
    }
  }

}
