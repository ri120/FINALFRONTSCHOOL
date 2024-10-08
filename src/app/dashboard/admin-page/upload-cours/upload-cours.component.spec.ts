import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoursComponent } from './upload-cours.component';

describe('UploadCoursComponent', () => {
  let component: UploadCoursComponent;
  let fixture: ComponentFixture<UploadCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
