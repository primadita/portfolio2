import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-page',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  contactData = {
    name: "",
    email: "",
    messsage:""
  }
  privacyChecked = false;

  onSubmit(ngForm: NgForm){
    console.log(this.contactData);
  }
}
