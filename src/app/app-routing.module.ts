import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/guard/auth.guard';



const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', loadChildren:() => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'logged', loadChildren:() => import('./logged/logged.module').then(m => m.LoggedModule)},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule{

}
