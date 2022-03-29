import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { TagComponent } from './components/tag/tag.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';

@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectListComponent,
    ProfileCardComponent,
    TagComponent,
    WorkHistoryComponent,
  ],
  imports: [AngularCommon, RouterModule, FontAwesomeModule],
  exports: [
    ProjectCardComponent,
    ProjectListComponent,
    ProfileCardComponent,
    TagComponent,
    WorkHistoryComponent,
  ],
})
export class ComponentsModule {}
