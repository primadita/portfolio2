import { CommonModule } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RequiredSkillsComponent } from './required-skills/required-skills.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectDescriptionListService } from '../services/project-description-list.service';
import { Project } from '../shared/interfaces/project';
import { Skill } from '../shared/interfaces/skill';
import { ProgrammingLanguageListService } from '../services/programming-language-list.service';

@Component({
  selector: 'app-single-project-overview',
  imports: [CommonModule, TranslateModule, RequiredSkillsComponent],
  templateUrl: './single-project-overview.component.html',
  styleUrl: './single-project-overview.component.scss'
})
export class SingleProjectOverviewComponent {
  route = inject(ActivatedRoute);
  projectdesclist = inject(ProjectDescriptionListService);
  proj?: Project= this.projectdesclist.projDescriptionList.find(pr => pr.projname === this.route.snapshot.paramMap.get('projectname'));
  proglanguagelist = inject(ProgrammingLanguageListService);
  
  html = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'HTML');
  css = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'CSS');
  js = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'JavaScript');
  angular = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'Angular');
  ts = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'TypeScript');
  firebase = this.proglanguagelist.progLanguageList.find(pl => pl.name === 'Firebase');

  ngOnInit(){
    const projectname = this.route.snapshot.paramMap.get('projectname');
  }

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
}
