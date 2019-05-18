import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  constructor(private questionService:QuestionService,private router:Router) { }

  ngOnInit() {
  }
  newGame(){
console.log("gdf")
    // this.triviaService.clearData();
    this.router.navigateByUrl('lets-play');

 }
}
