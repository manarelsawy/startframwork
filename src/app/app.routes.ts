import { Routes } from '@angular/router';
import { StartFramworkComponent } from './start-framwork/start-framwork.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


export const routes: Routes = [
    {path:'', redirectTo:'startframwork', pathMatch:'full'},
    {path:'startframwork', component:StartFramworkComponent , title:'startframwork'},
    {path:'about', component:AboutComponent , title:'about'},
    {path:'contact', component:ContactComponent , title:'contact'},
    {path:'portfolio', component:PortfolioComponent , title:'portfolio'},
];
