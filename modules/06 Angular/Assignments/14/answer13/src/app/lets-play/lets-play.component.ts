import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer.model';
import { Question } from '../question.model';
import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {
  answer:Answer;
  question:Question;
  hidden : boolean;
  correctAnswers: number;
  index :number;

  constructor(private answerService:AnswerService,private questionService:QuestionService,private router:Router) {  this.index=0;  ; this.hidden = false;}


  ngOnInit() {
    this.answer=this.answerService.getAnswer(this.index);
    // this.questions=this.questionService.getQuestions();
    this.nextQuestion();
  }
  submitForm(event, value: any){
    event.preventDefault();
    this.hidden = true;
    this.correctAnswers=this.questionService.getNumberOfCurrenetAnswer(value);

    console.log(value)

  }
  onItemChange(event){
    console.log(this.index-1);

    this.questionService.countCorrectAnswers(this.index-1,event.target.value);
    setTimeout(() => event.target.checked=false, 1500);

    // console.log(" Value is : ", event.target.value);
 }
  nextQuestion()
  {
    // console.log(" Value is : ", this.questionService.isActive);
    // event.target.checked=false;
    if(this.questionService.isActive===false)
    {
      this.router.navigateByUrl('/result');

    }

   this.question= this.questionService.getQuestion(this.index);
   this.answer=this.answerService.getAnswer(this.index);
    this.index++;
  }
  prevQuestion()
  {
    this.question=this.questionService.getQuestion(this.index);
   this.answer=this.answerService.getAnswer(this.index);

    this.index--;
  }
}
