import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../service/apiservice';
import { InstitutionModel } from '../../model/institution';
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
  // public rowsCourses: Array<CoursesModel>

  ngOnInit() {
    this.apiService.get('instituicoes').subscribe((data: InstitutionModel[]) => {
      this.rowsInstitution = data;
    });
  }

  delete(id: string) {
    const path = 'instituicoes/' + id;
    this.apiService.delete(path).subscribe((r) => {
      this.rowsInstitution = this.rowsInstitution.filter((p, i) => {
        if (Number(id) === p.id) {
          return false;
        }
        return true;
      }, this.rowsInstitution);

    });
  }

  create() {
    this.router.navigateByUrl('/instituicoes/add');
  }

  update(id: string) {
    this.router.navigateByUrl('/instituicoes/' + id);
  }

  checkdata(id: string) {
    this.router.navigateByUrl('/cursos/' + id);
  }
}
