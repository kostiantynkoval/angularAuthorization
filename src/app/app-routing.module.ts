import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// components
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login',
    component: AuthorizationComponent
  },
  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
