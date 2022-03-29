import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../../../common/content/projects';
import { tags } from '../../../common/content/tags';
import { workHistory } from '../../../common/content/work-history';
import { WorkHistory } from '../../../common/interfaces/about';
import { Project, Tag } from '../../../common/interfaces/projects';

@Component({
  selector: 'hewitson-dev-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss'],
})
export class TagsPageComponent implements OnInit {
  private tagId = '';
  public currentTag: Tag;
  public tagProjects: Project[] = [];
  public history: WorkHistory[] = [];

  constructor(private readonly route: ActivatedRoute) {
    this.tagId = this.route.snapshot.paramMap.get('id');
    this.currentTag = tags.find((tag) => tag.name === this.tagId);
    // Get projects associated with this tag
    this.tagProjects = projects.filter((project) =>
      project.tags.some((tag) => tag.name === this.tagId)
    );
    // Get work history associated with this tag
    this.history = workHistory
      .filter((history) =>
        history.roles.some((role) =>
          role.tags.some((tag) => tag.name === this.tagId)
        )
      )
      .sort((a, b) => b.roles[0].startDate - a.roles[0].startDate);
  }

  public ngOnInit(): void {}
}
