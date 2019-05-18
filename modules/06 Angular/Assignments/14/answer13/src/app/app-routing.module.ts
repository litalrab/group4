import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'lets-play', component: LetsPlayComponent },
  {path:'result',component:ResultComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
