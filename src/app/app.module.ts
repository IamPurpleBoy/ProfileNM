import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { SkillsNLangComponent } from './components/skillsnlang/skillsnlang.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent,
    SkillsNLangComponent,
    ProjectsComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius:50, 
      backgroundColor:'#b308e2', 
      titleColor:'white', 
      showUnits:false,
      responsive: true,
      outerStrokeWidth:4, 
      showInnerStroke: false,
      innerStrokeWidth:8,
      outerStrokeColor:'white',
      innerStrokeColor:'purple',
      animation:true, 
      animationDuration:1300,

    })
  ],
  providers: [PortfolioService,
  {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
