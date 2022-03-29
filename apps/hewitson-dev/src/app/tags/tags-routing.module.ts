import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: TagsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
