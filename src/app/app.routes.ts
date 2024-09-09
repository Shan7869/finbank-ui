import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'registration', component: UserCreateComponent}
  ];