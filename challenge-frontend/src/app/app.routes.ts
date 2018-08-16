import { Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { CheckDataComponent } from './view/check-data/check-data.component';
import { AddNewInstitutionComponent } from './view/add-new-institution/add-new-institution.component';
import { EditInstitutionComponent } from './view/edit-institution/edit-institution.component';
import { EditCourseComponent } from './view/edit-course/edit-course.component';
import { AddNewCourseComponent } from './view/add-new-course/add-new-course.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'check/instituicoes/:id', component: CheckDataComponent },
    { path: 'institution/add/', component: AddNewInstitutionComponent },
    { path: 'course/add/', component: AddNewCourseComponent },
    { path: 'instituicoes/:id', component: EditInstitutionComponent },
    { path: 'course/edit/:id', component: EditCourseComponent },
];
