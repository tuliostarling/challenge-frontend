import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CoursesModel } from '../../model/course';
import { ApiService } from '../../service/apiservice';
import { InstitutionModel } from '../../model/institution';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public acRoute: ActivatedRoute,
    public router: Router
  ) { }

  public courses: CoursesModel = new CoursesModel();
  public rowsInstitution: Array<InstitutionModel>;

  InstId: string;

  ngOnInit() {
    // this.acRoute.params.subscribe((data: any) => {
    this.courses = new CoursesModel();
    // });

    this.getInstitution();
  }

  getInstitution() {
    this.apiService.get('faculdades/').subscribe((data: InstitutionModel[]) => {
      this.rowsInstitution = data;
    });
  }

  public onSubmit() {
    this.apiService.post('cursos/', this.courses).subscribe(() => {
      this.courses = new CoursesModel();
      this.router.navigateByUrl('home/');
    });
  }

  change(id: string) {
    console.log(id)
    this.InstId = id;
    console.log('toot');
  }

}
