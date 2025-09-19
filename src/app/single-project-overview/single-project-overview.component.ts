import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RequiredSkillsComponent } from './required-skills/required-skills.component';

@Component({
  selector: 'app-single-project-overview',
  imports: [CommonModule, TranslateModule, RequiredSkillsComponent],
  templateUrl: './single-project-overview.component.html',
  styleUrl: './single-project-overview.component.scss'
})
export class SingleProjectOverviewComponent {

}
