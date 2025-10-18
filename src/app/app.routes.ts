import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Home as HomeLayout } from './layout/home/home';
import { ProductsList } from './layout/products-list/products-list';
import { Account } from './layout/account/account';
import { SignUp as AddAccountUser } from './components/sign-up/sign-up';

import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/home/home';
import { Product } from './dashboard/product/product';
import { User } from './dashboard/user/user';

import { NotFounded } from './components/not-founded/not-founded';
import { Login } from './components/login/login';
import { Signup } from './dashboard/signup/signup';
import { ProdcutDetails } from './layout/prodcut-details/prodcut-details';

export const routes: Routes = [
    {path:'', component:Layout, children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'home', component:HomeLayout},
        {path:'products', component:ProductsList},
        {path:'products/:slug', component:ProdcutDetails},
        {path:'account', component:Account},
        {path:'signup', component:AddAccountUser},
    ]},
    
    {path:'admin', component:Dashboard, children:[
        {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'product', component:Product},
        {path:'users', component:User},
        {path:'register', component:Signup}
    ]},
    
    {path:'login', component:Login},
    {path:'**', component:NotFounded}
];
