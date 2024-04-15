import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import path from 'path';
import { PatchEditComponent } from './patch-edit/patch-edit.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'add',
        component:AddComponent
    },
    {
        path:'view',
        component:ViewComponent
    },
    {
        path:'edit/:id',
        component:EditComponent
    },
    {
        path:'patch/:id',
        component:PatchEditComponent
    }
];
