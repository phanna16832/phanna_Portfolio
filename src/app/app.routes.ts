import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Calculator } from './calculator/calculator';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'about', component: About},
    {path:'calculator', component: Calculator},
];
