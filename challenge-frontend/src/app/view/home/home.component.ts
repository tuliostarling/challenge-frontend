import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../service/apiservice';
import { InstitutionModel } from '../../model/institution';

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
  public rows: Array<InstitutionModel>;

  ngOnInit() {
    this.apiService.get('instituicoes').subscribe((data: InstitutionModel[]) => {
      this.rows = data;
    });
  }

  delete(id: string) {
    const path = 'instituicoes/' + id;
    this.apiService.delete(path).subscribe((r) => {
      this.rows = this.rows.filter((p, i) => {
        if (Number(id) === p.id) {
          return false;
        }
        return true;
      }, this.rows);

    });
  }

  update(id: string) {
    this.router.navigateByUrl('/instituicoes/' + id);
  }

  checkdata(id: string) {
    this.router.navigateByUrl('check/instituicoes/' + id);
  }
}
