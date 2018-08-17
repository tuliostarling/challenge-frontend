import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { InstitutionModel } from '../../model/institution';
import { ApiService } from '../../service/apiservice';

@Component({
  selector: 'app-edit-institution',
  templateUrl: './edit-institution.component.html',
  styleUrls: ['./edit-institution.component.css']
})
export class EditInstitutionComponent implements OnInit {

  constructor(
    public apiService: ApiService,
    public acRoute: ActivatedRoute,
    public router: Router
  ) { }

  public institution: InstitutionModel = new InstitutionModel();

  ngOnInit() {
    this.acRoute.params.subscribe((data: any) => {
      if (data) {
        this.apiService.get('faculdades/' + data.id).subscribe((data: InstitutionModel) => {
          this.institution = data;
        });
      }
    });
  }

  public onSubmit() {
    this.apiService.update('faculdades/' + this.institution.id, this.institution).subscribe(() => {
      this.router.navigateByUrl('home');
    });
  }
}
