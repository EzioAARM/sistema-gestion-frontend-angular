import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component'; 
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { notVerifiedComponent } from './components/notVerified/notVerified.component';
import { recoverPasswordComponent } from './components/recoverPassword/recoverPassword.component';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'verify-account',
        component: notVerifiedComponent
    },{
        path: 'recover-password',
        component: recoverPasswordComponent
    }, {
        path: '',
        component: LayoutComponent,
        /*children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }, {

            }
        ]*/
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
