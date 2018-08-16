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
      if (data && data.id) {
        this.apiService.get('instituicoes/' + data.id).subscribe((data: InstitutionModel) => {
          this.institution = data;
        });
      } else {
        this.institution = new InstitutionModel();
      }
    });
  }

  public onSubmit() {
    if (this.institution.id) {
      this.apiService.update('instituicoes/' + this.institution.id, this.institution).subscribe((r) => {
        this.router.navigateByUrl('home');
      });
      // } else {
      //   this.apiService.post('institution', this.institution).subscribe((r) => {
      //     console.log(r);
      //     this.institution = new InstitutionModel();
      //     alert('Product added !');

      //   });
    }

  }
}
