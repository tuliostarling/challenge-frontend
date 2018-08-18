import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../../service/apiservice';
import { CoursesModel } from '../../model/course';
import { InstitutionModel } from '../../model/institution';

@Component({
  selector: 'app-edit',
  templateUrl: './check-data.component.html',
  styleUrls: ['./check-data.component.css']
})
export class CheckDataComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public acRoute: ActivatedRoute,
    public router: Router
  ) { }

  public rowsCourses: Array<CoursesModel>;
  public rowsInstitution: Array<InstitutionModel>;
  
  ngOnInit() {
    this.apiService.get('cursos').subscribe((data: CoursesModel[]) => {
      this.rowsCourses = data;
    });

    this.getInstitution();
  }

  getInstitution() {
    this.acRoute.params.subscribe((dataParam: any) => {
      this.apiService.get('faculdades/' + dataParam.id).subscribe((data: InstitutionModel[]) => {
        this.rowsInstitution = data;
      });
    });
  }

  delete(id: string) {
    const path = 'cursos/' + id;
    this.apiService.delete(path).subscribe((r) => {
      this.rowsCourses = this.rowsCourses.filter((p, i) => {
        if (Number(id) === p.id) {
          return false;
        }
        return true;
      }, this.rowsCourses);

    });
  }

  update(id: string) {
    this.router.navigateByUrl('edit/cursos/' + id);
  }
}
