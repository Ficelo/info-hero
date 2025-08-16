import { Component } from '@angular/core';
import {SourceDefis} from '../../../components/source-defis/source-defis';
import {Instructions} from '../../../components/instructions/instructions';
import {Button} from 'primeng/button';
import {ScoreService} from '../../../services/score.service';
import {Dialog} from 'primeng/dialog';
import {Router} from '@angular/router';

export interface SourceInfo {
  name : string,
  icon : string,
  correct : boolean
}

@Component({
  selector: 'app-page-defis-anti-fake-1',
  imports: [
    SourceDefis,
    Instructions,
    Button,
    Dialog
  ],
  templateUrl: './page-defis-anti-fake-1.html',
  standalone: true,
  styleUrl: './page-defis-anti-fake-1.css'
})
export class PageDefisAntiFake1 {

  instructions : string[] = [
    "1. Trouve les 8 sources d'information",
    "2. Attention aux pièges ! Certaines ne sont pas des sources fiables",
    "3. Passe ta souris sur les icônes pour voir leur description",
    "4. Tu a 10 minutes pour tout trouver",
    "5. 3 points par bonne source, -1 par erreur, +5 bonus si tu trouves tout"
  ];

  sources : SourceInfo[] = [
    {name: "Horoscope", icon: "star", correct : false},
    {name: "Podcast", icon: "microphone", correct: true},
    {name: "Ordinateur", icon: "microchip", correct: false},
    {name: "Radio", icon: "wifi", correct: true},
    {name: "Smartphone", icon: "mobile", correct: false},
    {name: "Réseaux sociaux", icon: "hashtag", correct: false},
    {name: "Télévision", icon: "desktop", correct: true},
    {name: "Publicité", icon: "crown", correct: false},
    {name: "Journal papier", icon: "map", correct: true},
    {name: "Rumeurs", icon: "comment", correct: false},
    {name: "Magazine", icon: "book", correct: false},
  ]

  selected : string[] = [];
  nbCorrectSources : number = 8;
  score : number = 0;
  visible : boolean = false;

  constructor(private scoreService : ScoreService, private router : Router) {}

  addNameToList(name : string) {
    this.selected.push(name);
    console.log(this.selected);
  }

  removeNameFromList(name : string) {
    const index = this.selected.indexOf(name);
    this.selected.splice(index, 1);
    console.log(this.selected);
  }

  getCorrectsAndWrong() {

    let totalCorrect : number = 0;
    let totalWrong : number = 0;

    for(let source of this.sources) {
      if(this.selected.includes(source.name) && source.correct) {
        totalCorrect += 1;
      } else if(this.selected.includes(source.name) && !source.correct){
        totalWrong += 1;
      }
    }

    console.log({correct : totalCorrect, wrong : totalWrong})

    return {correct : totalCorrect, wrong : totalWrong};
  }

  confirm() {

    let result = this.getCorrectsAndWrong();
    let score = 0;

    score += result.correct * 3 - result.wrong;

    if (this.nbCorrectSources == result.correct && result.wrong == 0) {
      score += 5;
    }

    this.score = score;
    this.visible = true;

  }

  retry() {
    this.score = 0;
    this.visible = false;
  }

  quit() {
    this.scoreService.add(this.score);
    this.router.navigate(["/anti-fake"]);
  }

}
