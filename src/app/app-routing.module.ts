import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { GuardsGuard } from './servicios/guards.guard';

const routes: Routes = [
  {path: "portfolio",component:PortfolioComponent},
  {path: "login",component:LoginComponent},
  {path: "", redirectTo:"portfolio" , pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
