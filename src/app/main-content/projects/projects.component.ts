import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { SingleProjectIntroComponent } from './single-project-intro/single-project-intro.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectDescriptionListService } from '../../services/project-description-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  imports: [CommonModule, SingleProjectIntroComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

/**
 * Component responsible for displaying a list of projects.
 * 
 * This component retrieves project descriptions from the
 * {@link ProjectDescriptionListService} and provides navigation
 * to a detailed single project overview.
 */
export class ProjectsComponent {

  // #region ATTRIBUTES
  /**
   * Service that provides the list of project descriptions.
   */
  projectdescriptionlist = inject(ProjectDescriptionListService);
  
  /**
   * Router instance used to navigate to other views.
   */
  router =inject(Router); // used to navigate on events

  /**
   * Project description for the "Join" project, if found.
   * 
   * @type {ProjectDescription | undefined}
   */
  join = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === 'Join');
  
  /**
   * Project description for the "El Pollo Loco" project, if found.
   * 
   * @type {ProjectDescription | undefined}
   */
  elPolloLoco = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === "El Pollo Loco");
  
  /**
   * Project description for the "Pokedéx" project, if found.
   * 
   * @type {ProjectDescription | undefined}
   */
  pokedex = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === "Pokedéx");
  // #endregion

  // #region METHODS
  /**
   * Navigates to the single project overview page for the given project.
   *
   * @param {string} projectname - The name of the project to display in the overview.
   * @returns {void}
   */
  gotoSingleProjectOverview(projectname: string){
    this.router.navigate(['/singleproject', projectname]);  
  }
  // #endregion
}
