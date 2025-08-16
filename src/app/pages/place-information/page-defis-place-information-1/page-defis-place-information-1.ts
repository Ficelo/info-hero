import { Component } from '@angular/core';
import { Answer, Question } from '../../anti-fake/page-defis-anti-fake-3/page-defis-anti-fake-3';
import { ScoreService } from '../../../services/score.service';
import { Router } from '@angular/router';
import { Button } from "primeng/button";

@Component({
  selector: 'app-page-defis-place-information-1',
  imports: [Button],
  standalone : true,
  templateUrl: './page-defis-place-information-1.html',
  styleUrl: './page-defis-place-information-1.css'
})
export class PageDefisPlaceInformation1 {

  instructions : string[] = [
    "1. Deviens un detecteur de fake news",
    "2. 3 points par bonne réponses"
  ];

  currentQuestion : number = 0;
  score : number = 0;
  choiceDisabled : boolean = false;
  nextQuestionButtonText : string = "Question suivante";

  questions : Question[] = [
    {text : "Les requins attaquent plus souvent en été;", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Il faut attendre 24h avant de déclarer une personne disparue", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Les chats ont 7 vies", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "La grande muraille de chine est visible depuis l'espace", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "On n'utilise que 10% de notre cervrau", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Boire 8 verres d'eau par jour est obligatoire", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Les cheveux et les ongles continuent de pousser après la mort", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Lire dans le noir abîme les yeux", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Les poissons rouges ont une mémoire de 3 secondes", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""},
    {text : "Le réchaufement climatique est causé par l'activité humaine", options : [{text : "Vrai", correct : true}, {text : "Faux", correct : false}], points : 3, explication : ""}
  ];

  constructor(private scoreService : ScoreService, private router : Router) {

  }

  checkCorrect(choice : Answer) : void {
    if (choice.correct) {
      this.score += this.questions[this.currentQuestion].points;
    }
    if(this.currentQuestion == this.questions.length - 1) {
      this.nextQuestionButtonText = "Quitter";
    }
    this.choiceDisabled = true;
  }

  nextQuestion() : void {
    if(this.currentQuestion <= this.questions.length - 1){
      this.currentQuestion += 1;
    }
    if(this.currentQuestion > this.questions.length - 1) {
    this.scoreService.add(this.score);
      this.router.navigate(["anti-fake"]);
    }
    this.choiceDisabled = false;
  }

}
