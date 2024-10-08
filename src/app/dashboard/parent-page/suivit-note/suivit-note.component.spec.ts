import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivitNoteComponent } from './suivit-note.component';

describe('SuivitNoteComponent', () => {
  let component: SuivitNoteComponent;
  let fixture: ComponentFixture<SuivitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuivitNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuivitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
