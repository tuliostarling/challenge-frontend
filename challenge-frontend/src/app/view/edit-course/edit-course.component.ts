import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CoursesModel } from '../../model/course';
import { ApiService } from '../../service/apiservice';
import { InstitutionModel } from '../../model/institution';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public acRoute: ActivatedRoute,
    public router: Router
  ) { }

  public courses: CoursesModel = new CoursesModel();
  public rowsInstitution: Array<InstitutionModel>;

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      if (data) {
        this.apiService.get('cursos/' + data.id).subscribe((data: CoursesModel) => {
          this.courses = data;
        });
      }
    });
    
    this.getInstitution();
  }

  getInstitution() {
    this.apiService.get('faculdades/' + this.courses.faculdades_id).subscribe((data: InstitutionModel[]) => {
      this.rowsInstitution = data;
    });
  }

  public onSubmit() {
    this.getInstitution();
    this.apiService.update('cursos/' + this.courses.id, this.courses).subscribe(() => {
      this.router.navigateByUrl('home');
    });
  }

}
