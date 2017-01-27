import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/Router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'careers', component: CareersComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'team', component: TeamComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NavbarComponent,
    // FooterComponent,
    // TeamComponent,
    // DonateComponent,
    // ContactComponent,
    // ArticlesComponent,
    // WhatWeDoComponent,
    // NewsComponent,
    // ChaptersComponent,
    // ActionComponent,
    // ResearchComponent,
    // CareersComponent,
    // AboutComponent
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
