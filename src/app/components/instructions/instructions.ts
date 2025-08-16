import {Component, Input} from '@angular/core';
import {Button} from 'primeng/button';
import {NgIf} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-instructions',
  imports: [
    Button,
    NgIf
  ],
  templateUrl: './instructions.html',
  standalone: true,
  styleUrl: './instructions.css',
  animations: [
    trigger('slideUpAndFade', [
      transition('in => out', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]

})
export class Instructions {

  @Input() title : string = "";
  @Input() subtitle : string = "";
  @Input() instructions: string[] = [];

  showPanel = true;
  panelState: 'in' | 'out' = 'in';

  start() {
    this.panelState = 'out';
  }

  onAnimationDone() {
    if (this.panelState === 'out') {
      this.showPanel = false;
    }
  }

}
