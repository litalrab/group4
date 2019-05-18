import { Component, OnInit, Input } from '@angular/core';
import {AnswerService} from '../answer.service'
import { QuestionService } from '../question.service';
import { Question } from '../question.model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
//  question: Question;
 @Input() question: Question;
 @Input() index :number;

  constructor(private questionService:QuestionService) {   }

  ngOnInit() {
    // console.log(this.question)
    // this.answers=this.answerService.fillQuestionS();
  
   
  }

}

