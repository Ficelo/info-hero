import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {NgClass, NgForOf} from '@angular/common';
import {Instructions} from '../../../components/instructions/instructions';
import {Dialog} from 'primeng/dialog';
import {Router} from '@angular/router';
import {ScoreService} from '../../../services/score.service';

export interface Answer {
  text : string;
  correct : boolean;
}

export interface Question {
  text : string;
  options : Answer[]
  points : number
  explication? : string
}

@Component({
  selector: 'app-page-defis-anti-fake-3',
  imports: [
    Button,
    NgForOf,
    Instructions,
    Dialog,
    NgClass
  ],
  templateUrl: './page-defis-anti-fake-3.html',
  standalone: true,
  styleUrl: './page-defis-anti-fake-3.css'
})

export class PageDefisAntiFake3 {

  questions : Question[] = [];
  currentQuestion : number = 0;
  visible : boolean = false;
  score : number = 0;

  nextQuestionButtonVisible : boolean = false;
  validateQuestionButtonVisible : boolean = true;

  selectedAnswer : Answer | null = null;

  instructions : string[] = [
    "1. Réponds aux 4 questions sur l'importance de l'information",
    "2. Une seule bonne réponse par question",
    "3. Tu verras l'explication après chaque réponse",
    "4. 12 points par bonne réponse",
    "5. Tu as 10 minutes pour tout terminer"
  ];

  constructor(private router : Router, private scoreService : ScoreService) {
    this.questions.push(
      {
        text : "Que se passerait-il si tu n'avais aucun accès aux informations ?",
        options: [
          {text : "Je ne pourrais pas comprendre ce qui se passe autour de moi", correct : true},
          {text : "Je serais plus heureux sans les mauvaises nouvelles", correct : false},
          {text : "Je pourrais inventer mes propres informations", correct : false},
          {text : "Cela ne changerait rien à ma vie", correct : false}
        ],
        points : 12
      },
      {
        text : "Quelle est la différence entre être informé et être désinformé ?",
        options: [
          {text : "Être informé c'est avoir des informations vraies, être désinformé c'est avoir des informations fausses", correct : true},
          {text : "Être informé c'est connaitre uniquement les bonnes nouvelles", correct : false},
          {text : "Être désinformé c'est mieux car on n'a pas de soucis", correct : false},
          {text : "Il n'y a pas de différence importante", correct : false}
        ],
        points : 12
      },
      {
        text : "Pourquoi est-il important d'avoir accès à l'information ?",
        options : [
          {text : "Pour gagner aux jeux télévisés", correct : true},
          {text : "Pour comprendre le monde et prendre des décisions éclairées", correct : false},
          {text : "Pour pouvoir critiquer les autres", correct : false},
          {text : "Pour avoir quelque chose à dire en société", correct : false},
        ],
        points : 12
      },
      {
        text : "Comment l'information t'aide-t-elle au quotidien ?",
        options : [
          {text : "Elle me permet de connaitre la météo, les événements et avoir des informations sur le monde qui m'entoure", correct : true},
          {text : "Elle me donne des sujets de conversation", correct : false},
          {text : "Elle m'occupe quand je m'ennuie", correct : false},
          {text : "Elle me fait peur avec les mauvaises nouvelles", correct : false},
        ],
        points : 12
      }
    )

    for(let i = 0; i < this.questions.length; i++) {
      this.shuffleArray(this.questions[i].options);
    }
    this.shuffleArray(this.questions);

  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  nextQuestion(){
    if(this.currentQuestion + 1 >= this.questions.length) {
      this.visible = true;
    } else {
      this.currentQuestion += 1;
    }

    this.selectedAnswer = null;
    this.nextQuestionButtonVisible = false;
    this.validateQuestionButtonVisible = true;

  }

  previousQuestion() {
    if(this.currentQuestion -1 < 0) {
      this.currentQuestion = 0;
    } else {
      this.currentQuestion -= 1;
    }
  }

  validateQuestion(index : number) {

    if(this.selectedAnswer && this.selectedAnswer.correct) {
      this.score += this.questions[index].points;
    }

    this.nextQuestionButtonVisible = true;
    this.validateQuestionButtonVisible = false;

  }

  selectAnswer(answer : Answer) {
    if (!this.nextQuestionButtonVisible) {
      this.selectedAnswer = answer;
    }
  }

  retry() {
    this.score = 0;
    this.visible = false;
  }

  quit() {
    this.scoreService.add(this.score);
    this.router.navigate(["anti-fake"]);
  }

}
