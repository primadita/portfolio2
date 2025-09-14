import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { ProgrammingLanguageListService } from '../../services/programming-language-list.service';

@Component({
  selector: 'app-skill-page',
  imports: [TranslateModule, CommonModule, ProgrammingLanguageComponent],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.scss'
})
export class SkillPageComponent {
  programminglanguagelist = inject(ProgrammingLanguageListService);
  
  peelsticker():void{
    
  }
}
