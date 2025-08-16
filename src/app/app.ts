import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Score} from './components/score/score';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Score],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('info-heros');
}
