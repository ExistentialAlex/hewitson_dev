import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../common/components.module';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectHeaderComponent } from './components/project-header/project-header.component';
import { ProjectArticleComponent } from './components/project-article/project-article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectPageComponent,
    ProjectHeaderComponent,
    ProjectArticleComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ComponentsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule,
    FontAwesomeModule,
  ],
})
export class ProjectsModule {}
