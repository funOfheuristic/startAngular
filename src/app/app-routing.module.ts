import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CanDeactivateGuardService } from './Shared/can-deactivate-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActiveService } from './Shared/can-active.service';
import { CanActiveChildService } from './Shared/can-active-child.service';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent},
  { path: 'profile/:userId', component: ProfileComponent, 
  children: [
    { path: "login", component: LoginComponent }
  ],
  canDeactivate: [CanDeactivateGuardService],
  canActivate: [CanActiveService],
  canActivateChild: [CanActiveChildService]
},
{ path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
