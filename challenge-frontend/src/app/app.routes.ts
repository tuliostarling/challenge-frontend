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
    { path: 'check_data', component: CheckDataComponent },
    { path: 'add_new_institution', component: AddNewInstitutionComponent },
    { path: 'add_new_course', component: AddNewCourseComponent },
    { path: 'edit_institution', component: EditInstitutionComponent },
    { path: 'edit_course', component: EditCourseComponent },
]