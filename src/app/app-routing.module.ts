import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from 'src/app/pages/diary/diary.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { QuotesComponent } from 'src/app/pages/quotes/quotes.component';
import { ActivitiesComponent } from 'src/app/pages/activities/activities.component';
import { AstroComponent } from 'src/app/pages/astro/astro.component';
import { ConfigComponent } from 'src/app/pages/config/config.component';
import { ThanksComponent } from 'src/app/pages/thanks/thanks.component';

const routes: Routes = [
  { path: 'diary', component: DiaryComponent},
  { path: 'quotes', component: QuotesComponent},
  { path: 'activities', component: ActivitiesComponent},
  { path: 'astro', component: AstroComponent},
  { path: 'config', component: ConfigComponent},
  { path: 'thanks', component: ThanksComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
