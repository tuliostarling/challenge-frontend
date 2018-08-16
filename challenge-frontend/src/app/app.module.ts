import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { CheckDataComponent } from './view/check-data/check-data.component';
import { AddNewInstitutionComponent } from './view/add-new-institution/add-new-institution.component';
import { EditInstitutionComponent } from './view/edit-institution/edit-institution.component';
import { EditCourseComponent } from './view/edit-course/edit-course.component';
import { AddNewCourseComponent } from './view/add-new-course/add-new-course.component';
import { ApiService } from './service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CheckDataComponent,
    AddNewInstitutionComponent,
    EditInstitutionComponent,
    EditCourseComponent,
    AddNewCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
