import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routes} from './app.router';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from  './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    routes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
