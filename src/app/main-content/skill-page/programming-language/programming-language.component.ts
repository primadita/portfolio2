import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-programming-language',
  imports: [CommonModule],
  templateUrl: './programming-language.component.html',
  styleUrl: './programming-language.component.scss'
})
export class ProgrammingLanguageComponent {
  @Input()proglanguage = {
    imgPath: './assets/icons/icon_HTML.png',
    altText: 'HTML icon',
    name: 'HTML'
  }
}
