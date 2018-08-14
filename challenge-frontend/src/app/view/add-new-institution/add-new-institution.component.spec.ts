import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInstitutionComponent } from './add-new-institution.component';

describe('AddNewInstitutionComponent', () => {
  let component: AddNewInstitutionComponent;
  let fixture: ComponentFixture<AddNewInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
