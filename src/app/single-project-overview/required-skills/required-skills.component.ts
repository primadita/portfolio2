import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '../../shared/interfaces/skill';

@Component({
  selector: 'app-required-skills',
  imports: [CommonModule],
  templateUrl: './required-skills.component.html',
  styleUrl: './required-skills.component.scss'
})
export class RequiredSkillsComponent {
  @Input() icon!: Skill;
}
