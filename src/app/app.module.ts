import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './home/team/team.component';
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
import { PartnersComponent } from './home/partners/partners.component';
import { CostsComponent } from './costs/costs.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'transparency', component: CostsComponent }
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
    AboutComponent,
    PartnersComponent,
    CostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
