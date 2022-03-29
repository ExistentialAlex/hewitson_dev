import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { ComponentsModule } from '../common/components.module';

@NgModule({
  declarations: [TagsPageComponent],
  imports: [CommonModule, ComponentsModule, TagsRoutingModule],
})
export class TagsModule {}
