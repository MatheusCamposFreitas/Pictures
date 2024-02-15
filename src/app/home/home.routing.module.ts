import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { loginGuard } from '../core/auth/login.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [loginGuard],
        children: [
            {
                path: '',
                component: SigninComponent,
                data: {
                    title: 'Sign In'
                }
            },
            {
                path: 'signup',
                component: SignupComponent,
                data: {
                    title: 'Sign Up'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
