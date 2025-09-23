import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../shared/interfaces/skill';

/**
 * Component responsible for displaying a programming language 
 * knowledge that is necessary for the project.
 * 
 * Receives a {@link Skill} object as input and 
 * renders it in the template.
 */
@Component({
  selector: 'app-required-skills',
  imports: [CommonModule],
  templateUrl: './required-skills.component.html',
  styleUrl: './required-skills.component.scss'
})
export class RequiredSkillsComponent {
  // #region ATTRIBUTES
  /**
   * The skill to be displayed, including its icon and related metadata.
   *
   * @input
   * @type {Skill}
   */
  @Input() icon!: Skill;
  // #endregion
}
