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
export class ProjectsComponent {
  projectdescriptionlist = inject(ProjectDescriptionListService);
  router =inject(Router); // um beim Event zu navigieren

  join = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === 'Join');
  elPolloLoco = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === "El Pollo Loco");
  pokedex = this.projectdescriptionlist.projDescriptionList.find(proj => proj.projname === "Pokedéx");

  gotoSingleProjectOverview(projectname: string){
    this.router.navigate(['/singleproject', projectname]);  
  }
}
