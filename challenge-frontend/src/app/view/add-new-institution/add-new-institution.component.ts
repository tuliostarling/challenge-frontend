import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { InstitutionModel } from '../../model/institution';
import { ApiService } from '../../service/apiservice';

@Component({
  selector: 'app-add-new-institution',
  templateUrl: './add-new-institution.component.html',
  styleUrls: ['./add-new-institution.component.css']
})
export class AddNewInstitutionComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public acRoute: ActivatedRoute,
    public router: Router
  ) { }

  public institution: InstitutionModel = new InstitutionModel();

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      this.institution = new InstitutionModel();
    });
  }

  public onSubmit() {
    this.apiService.post('instituicoes/', this.institution).subscribe(() => {
      this.institution = new InstitutionModel();
      this.router.navigateByUrl('home');
    });
  }
}
