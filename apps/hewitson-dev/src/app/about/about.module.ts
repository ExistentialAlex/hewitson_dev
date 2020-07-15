import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ComponentsModule } from '../common/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillComponent } from './components/skills/skill.component';


@NgModule({
  declarations: [AboutPageComponent, WorkHistoryComponent, SkillsComponent, ContactDetailsComponent, SkillComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ComponentsModule,
    FontAwesomeModule
  ]
})
export class AboutModule { }
