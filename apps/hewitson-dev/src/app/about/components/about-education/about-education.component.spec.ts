import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEducationComponent } from './about-education.component';

describe('AboutEducationComponent', () => {
  let component: AboutEducationComponent;
  let fixture: ComponentFixture<AboutEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
