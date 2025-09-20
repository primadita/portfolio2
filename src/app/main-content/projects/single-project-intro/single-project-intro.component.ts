import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, input, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectDescriptionListService } from '../../../services/project-description-list.service';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-single-project-intro',
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project-intro.component.html',
  styleUrl: './single-project-intro.component.scss'
})
export class SingleProjectIntroComponent {
  projectdesclist = inject(ProjectDescriptionListService);
  
  @Input() singleproj!: Project;
}
