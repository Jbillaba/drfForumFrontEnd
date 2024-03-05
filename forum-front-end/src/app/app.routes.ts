import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login', component: LogInPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'submitpost', component: CreatePostComponent},
    {path: 'post/:postid', component: PostDetailsComponent },
    {path: 'user/:userid', component: UserDetailComponent},
    {path:'**', component: PageNotFoundComponent},

];
