import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjectCardComponent, ProjectListComponent],
  imports: [AngularCommon, RouterModule, FontAwesomeModule],
  exports: [ProjectCardComponent, ProjectListComponent],
})
export class ComponentsModule {}
