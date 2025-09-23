import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Injectable, input, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectDescriptionListService } from '../../../services/project-description-list.service';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-single-project-intro',
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project-intro.component.html',
  styleUrl: './single-project-intro.component.scss'
})

/**
 * Component responsible for displaying an introduction to a single project.
 * 
 * Accepts a project as input and provides an output event to notify
 * when navigation to the detailed project page is requested.
 */
export class SingleProjectIntroComponent {
  // #region ATTRIBUTES
  /**
   * The project data to be displayed in the introduction.
   *
   * @input
   * @type {Project}
   */
  @Input() singleproj!: Project;

  /**
   * Event emitter that notifies when the user requests
   * navigation to the detailed project page.
   *
   * @output
   * @type {EventEmitter<string>}
   */
  @Output() gotoDetailPage = new EventEmitter<string>();
}
