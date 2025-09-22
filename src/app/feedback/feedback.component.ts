import { Component } from '@angular/core';
import { RouterLink } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  imports: [RouterLink, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

}
