import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ComponentsModule } from '../common/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillComponent } from './components/skills/skill.component';
import { AboutEducationComponent } from './components/about-education/about-education.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    SkillsComponent,
    ContactDetailsComponent,
    SkillComponent,
    AboutEducationComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ComponentsModule,
    FontAwesomeModule,
  ],
})
export class AboutModule {}
