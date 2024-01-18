import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LogInPageComponent},
];
