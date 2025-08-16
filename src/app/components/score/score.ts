import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [
    AsyncPipe
  ],
  templateUrl: './score.html',
  standalone: true,
  styleUrl: './score.css'
})
export class Score implements OnInit {

  score : Observable<number> | null = null;

  constructor(private scoreService : ScoreService) {}

  ngOnInit() {
    this.score = this.scoreService.scoreObservable;
  }

}
