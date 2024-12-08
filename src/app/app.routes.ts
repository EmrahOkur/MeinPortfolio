import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';

export const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', component: AboveTheFoldComponent, pathMatch: 'full' }, // Standardroute
];
