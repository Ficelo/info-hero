import { Component } from '@angular/core';
import { Draggable, Droppable } from 'primeng/dragdrop';
import { NgForOf } from '@angular/common';
import { Instructions } from '../../../components/instructions/instructions';
import { ScoreService } from '../../../services/score.service';
import { Chip } from 'primeng/chip';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Router } from '@angular/router';

export interface DragOption {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-page-defis-anti-fake-2',
  imports: [
    Droppable,
    Draggable,
    NgForOf,
    Instructions,
    Chip,
    Button,
    Dialog
  ],
  templateUrl: './page-defis-anti-fake-2.html',
  standalone: true,
  styleUrl: './page-defis-anti-fake-2.css'
})
export class PageDefisAntiFake2 {
  currentDrag: DragOption | null = null;

  drop1List: DragOption[] = [];
  drop2List: DragOption[] = [];
  drop3List: DragOption[] = [];
  drop4List: DragOption[] = [];

  dropLists: DragOption[][] = [
    this.drop1List,
    this.drop2List,
    this.drop3List,
    this.drop4List
  ];

  instructions: string[] = [
    "1. Glisse et dépose les sources d'information dans les créneaux horaires.",
    "2. Tu peux utiliser plusieurs fois la même source d'information.",
    "3. Tu peux placer plusieurs sources d'informations dans le même créneau",
    "4. SCORE : 5 points par article corrigé, (40 points maximum).",
    "5. Tu as 10 minutes pour organiser ta journée."
  ];

  options: DragOption[] = [
    { name: "Podcast", icon: "headphones" },
    { name: "Actualités du matin", icon: "desktop" },
    { name: "Journal papier", icon: "book" },
    { name: "Lecture d'articles de presse en ligne", icon: "receipt" },
    { name: "Discussion en famille", icon: "users" },
    { name: "Journal télévisé", icon: "desktop" },
    { name: "Radio", icon: "microphone" },
    { name: "Radio en voiture", icon: "microphone" },
    { name: "Réseaux sociaux", icon: "hashtag" },
    { name: "Conversations avec des amis", icon: "face-smile" },
    { name: "Recherches internet", icon: "search" },
  ];

  visible = false;
  score = 0;

  constructor(
    private scoreService: ScoreService,
    private router: Router
  ) {}

  onDragHandle(item: DragOption) {
    this.currentDrag = item;
  }

  onDragEndHandle() {
    this.currentDrag = null;
  }

  onDropHandle(dropZoneNumber: number) {
    if (this.currentDrag) {
      this.dropLists[dropZoneNumber - 1].push(this.currentDrag);
      this.currentDrag = null;
    }
  }

  onRemove(item: DragOption, list: DragOption[]) {
    const index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    }
  }

  getScore() {
    for(let list of this.dropLists) {
      // TODO : implémenter le vrai calcul de points
    }

    this.score += 40;

  }

  confirm() {
    this.getScore();
    this.visible = true;
  }

  retry() {
    this.score = 0;
    this.visible = false;
    this.drop1List.length = 0;
    this.drop2List.length = 0;
    this.drop3List.length = 0;
    this.drop4List.length = 0;
  }

  quit() {
    this.scoreService.add(this.score);
    this.router.navigate(["anti-fake"]);
  }
}
