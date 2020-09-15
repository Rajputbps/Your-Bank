import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoneFormComponent } from './lone-form.component';

describe('LoneFormComponent', () => {
  let component: LoneFormComponent;
  let fixture: ComponentFixture<LoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
