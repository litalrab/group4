import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answer/answer.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LetsPlayComponent } from './lets-play/lets-play.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    AnswerComponent,
    NavComponent,
    LetsPlayComponent,
    HowToPlayComponent,
    HomeComponent,
    ResultComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
