import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Opinion } from '../../../shared/interfaces/opinion';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, TranslateModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() singletesti!:Opinion;
}
