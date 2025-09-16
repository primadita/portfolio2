import { CommonModule } from '@angular/common';
import { Component, Injectable, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectDescriptionListService } from '../../../services/project-description-list.service';

@Component({
  selector: 'app-single-project-intro',
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project-intro.component.html',
  styleUrl: './single-project-intro.component.scss'
})
export class SingleProjectIntroComponent {
  
  @Input() singleproj = {
    projname: 'Join',
    imgPath: './assets/design/03_portfolio/29_Join thumbnail.png',
    altText: 'Join thumbnail',
    desc: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    details: 'Lorem ipsum',
    ihk: true,
    duration: "4 weeks"
  }
}
