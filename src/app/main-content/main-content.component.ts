import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, AboutMeComponent, SkillPageComponent, ProjectsComponent, TestimonialsPageComponent, ContactPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
