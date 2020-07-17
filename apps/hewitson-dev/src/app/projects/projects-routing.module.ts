import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
  {
    path: ':id',
    component: ProjectPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
