import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottimeComponent } from './slottime.component';

describe('SlottimeComponent', () => {
  let component: SlottimeComponent;
  let fixture: ComponentFixture<SlottimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlottimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlottimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
