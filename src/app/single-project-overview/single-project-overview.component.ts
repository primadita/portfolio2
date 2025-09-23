import { CommonModule } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RequiredSkillsComponent } from './required-skills/required-skills.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectDescriptionListService } from '../services/project-description-list.service';
import { Project } from '../shared/interfaces/project';
import { ProgrammingLanguageListService } from '../services/programming-language-list.service';

/**
 * Component responsible for displaying the overview of a single 
 * project.
 *
 * Retrieves project details based on the route parameter
 * and provides references to the required programming languages and 
 * tools.
 */
@Component({
  selector: 'app-single-project-overview',
  imports: [CommonModule, TranslateModule, RequiredSkillsComponent],
  templateUrl: './single-project-overview.component.html',
  styleUrl: './single-project-overview.component.scss'
})
export class SingleProjectOverviewComponent {
  // #region ATTRIBUTES
  /**
   * Activated route instance used to retrieve the current project name
   * from the route parameters.
   */
  route = inject(ActivatedRoute);

  /**
   * Service providing access to the list of project descriptions.
   */
  projectdesclist = inject(ProjectDescriptionListService);

  /**
   * The project to display, determined by the `projectname` route parameter.
   *
   * @type {Project | undefined}
   */
  proj?: Project= this.projectdesclist.projDescriptionList.find(pr => pr.projname === this.route.snapshot.paramMap.get('projectname'));
  
  /**
   * Service providing access to the list of programming languages.
   */
  proglanguagelist = inject(ProgrammingLanguageListService);
  
  /**
   * Programming language reference for HTML, if available.
   */
  html = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'HTML');
  
  /**
   * Programming language reference for CSS, if available.
   */
  css = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'CSS');
  
  /**
   * Programming language reference for JavaScript, if available.
   */
  js = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'JavaScript');
  
  /**
   * Framework reference for Angular, if available.
   */
  angular = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'Angular');
  
  /**
   * Programming language reference for TypeScript, if available.
   */
  ts = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'TypeScript');
  
  /**
   * Service/tool reference for Firebase, if available.
   */
  firebase = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'Firebase');
  // #endregion

  // #region METHODS
  /**
   * Lifecycle hook called on component initialization.
   *
   * Retrieves the current project name from the route snapshot.
   *
   * @returns {void}
   */
  ngOnInit(){
    const projectname = this.route.snapshot.paramMap.get('projectname');
  }

  /**
   * Determines the width of an underline element based on the current project name.
   *
   * @returns {number} The underline width in pixels.
   */
  setUnderlineWidth(): number {
    switch (this.proj?.projname) {
      case 'Join':
        return 35;  
      case 'El Pollo Loco':
        return 80;
      case 'Pokedéx':
        return 60;
      default:
        return 100; 
    }
  } 
  // #endregion
}
