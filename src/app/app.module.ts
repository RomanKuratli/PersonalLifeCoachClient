import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DiaryComponent } from './pages/diary/diary.component';
import { HomeComponent } from './pages/home/home.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { AstroComponent } from './pages/astro/astro.component';
import { ConfigComponent } from './pages/config/config.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LogoComponent,
    HeaderComponent,
    DiaryComponent,
    HomeComponent,
    QuotesComponent,
    ActivitiesComponent,
    AstroComponent,
    ConfigComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
