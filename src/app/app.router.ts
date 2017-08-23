
import {ModuleWithProviders} from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {CertificationsComponent} from './certifications/certifications.component';
import {ContactComponent} from './contact/contact.component';
import { RouterLinkActive } from '@angular/router';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
     { path: 'about', component: AboutComponent},
     { path: 'projects', component: ProjectsComponent},
     { path: 'certifications', component: CertificationsComponent},
     { path: 'contact', component: ContactComponent}

];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);

