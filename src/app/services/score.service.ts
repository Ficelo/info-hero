import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score = new BehaviorSubject<number>(0);

  readonly scoreObservable = this.score.asObservable();

  add(points: number) {
    this.score.next(this.score.value + points);
  }

  subtract(points: number) {
    this.score.next(this.score.value - points);
  }

  reset() {
    this.score.next(0);
  }

}
