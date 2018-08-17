import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../service/apiservice';
import { InstitutionModel } from '../../model/institution';
import { CoursesModel } from '../../model/course';
// import { CoursesModel } from '../../model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public router: Router
  ) { }

  public columns = ['id', 'nome', 'notageral'];
  public rowsInstitution: Array<InstitutionModel>;
  public rowsCourses: Array<CoursesModel>

  ngOnInit() {
    this.apiService.get('faculdades').subscribe((data: InstitutionModel[]) => {
      this.rowsInstitution = data;
    });

    this.getCursos()
  }

  getCursos() {
    this.apiService.get('cursos').subscribe((data: CoursesModel[]) => {
      this.rowsCourses = data;
    });
  }

  delete(id: string) {
    const path = 'faculdades/' + id;
    this.apiService.delete(path).subscribe((r) => {
      this.rowsInstitution = this.rowsInstitution.filter((p, i) => {
        if (Number(id) === p.id) {
          return false;
        }
        return true;
      }, this.rowsInstitution);

    });
  }

  createInstitution() {
    this.router.navigateByUrl('/faculdades/add');
  }

  createCourse() {
    this.router.navigateByUrl('cursos/add/');
  }

  update(id: string) {
    this.router.navigateByUrl('/faculdades/' + id);
  }

  checkdata(id: string) {
    this.router.navigateByUrl('/cursos/' + id);
  }
}
