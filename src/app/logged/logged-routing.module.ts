import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';

const routes: Routes = [
  {path: '', redirectTo:'logged', pathMatch: 'full'},

  {path: 'logged', component : LoggedComponent },

  {path: 'home', loadChildren:() => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  {path: 'seite', loadChildren:() => import('./seite/seite.module').then(m => m.SeiteModule)},
  {path: 'user', loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path: '**', loadChildren:() => import('./notfound/notfound.module').then(m => m.NotfoundModule)},
  {path: 'categories', loadChildren:() => import('./categories/categories.module').then(m => m.CategoriesModule)},
  {path: 'category1', loadChildren:() => import('./categories/category1/category1.component').then(m => m.Category1Component)},
  {path: 'category2', loadChildren:() => import('./categories/category2/category2.component').then(m => m.Category2Component)},
  {path: 'categories', loadChildren:() => import('./categories/category3/category3.component').then(m => m.Category3Component)},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
