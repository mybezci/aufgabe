import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedRoutingModule } from './logged-routing.module';
import { LogvalidService } from '../login/logvalid.service';
import { Router } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
