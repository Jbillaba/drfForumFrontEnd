import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LogInPageComponent},
    {path:'**', component: PageNotFoundComponent},
];
