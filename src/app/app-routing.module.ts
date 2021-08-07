import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-and-login', component: RegisterAndLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
