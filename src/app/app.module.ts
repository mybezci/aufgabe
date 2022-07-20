import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './logged/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SeiteComponent } from './logged/seite/seite.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './logged/notfound/notfound.component';
import { AuthGuard } from './login/guard/auth.guard';
import { LogvalidService } from './login/logvalid.service';
import { UserComponent } from './logged/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './logged/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './logged/categories/categories.component';
import { Category1Component } from './logged/categories/category1/category1.component';
import { Category2Component } from './logged/categories/category2/category2.component';
import { Category3Component } from './logged/categories/category3/category3.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoggedComponent } from './logged/logged.component';
import { LoggedRoutingModule } from './logged/logged-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    SeiteComponent,
    NotfoundComponent,
    UserComponent,
    CategoriesComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    LoginRoutingModule,
    LoggedRoutingModule
  ],
  providers: [AuthGuard, LogvalidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
