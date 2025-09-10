import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SingleProjectOverviewComponent } from './single-project-overview/single-project-overview.component';

export const routes: Routes = [
    {path:'', component: MainContentComponent},
    {path:'imprint', component: ImprintComponent},
    {path:'singleproject', component: SingleProjectOverviewComponent}
];
