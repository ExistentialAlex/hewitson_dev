import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArticleComponent } from './project-article.component';

describe('ProjectArticleComponent', () => {
  let component: ProjectArticleComponent;
  let fixture: ComponentFixture<ProjectArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
