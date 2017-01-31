import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { NewsComponent } from './home/news/news.component';
import { ChaptersComponent } from './home/chapters/chapters.component';
import { ActionComponent } from './home/action/action.component';
import { ResearchComponent } from './home/research/research.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TeamComponent,
    DonateComponent,
    ContactComponent,
    ArticlesComponent,
    WhatWeDoComponent,
    NewsComponent,
    ChaptersComponent,
    ActionComponent,
    ResearchComponent,
    CareersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
