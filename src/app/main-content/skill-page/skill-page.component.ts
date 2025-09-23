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
  // #region ATTRIBUTES
  /**
   * Service that provides the list of programming languages.
   */
  programminglanguagelist = inject(ProgrammingLanguageListService);

    
  /**
   * Flag that indicates whether the sticker has been peeled.
   * Default is `false`.
   */
  peeled = false;
  // #endregion

  // #region METHODS
  /**
   * Marks the sticker as peeled.
   * Sets {@link peeled} to `true`.
   */
  peelsticker():void{
    this.peeled = true;  
  }
  // #endregion
}
