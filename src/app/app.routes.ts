import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Novel } from './novel/novel';
import { Genre } from './genre/genre';
import { Login } from './auth/login';
import { Submit } from './submit/submit';

export const routes: Routes = [
    {path: '', component: Home,pathMatch: 'full'},
    {path: 'novel', component: Novel},
    {path: 'submit', component: Submit},
    {path: 'genre', component: Genre},
    {path: 'login',component:Login}
];