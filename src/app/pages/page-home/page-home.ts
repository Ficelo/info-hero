import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-page-home',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './page-home.html',
  standalone: true,
  styleUrl: './page-home.css'
})
export class PageHome {

  spots = [
    { x: '30%', y: '40%', link : "anti-fake",  label: "Place de l'information"},
    { x: '60%', y: '20%', link : "information-hub", label: "Laboratoire anti-fake" },
    { x: '75%', y: '70%', link : "studio-creation-hub", label: "Studio de création" },
    { x: '45%', y: '50%', link : "tour-controle-hub", label: "Tour de controle"}
  ];

  handleSpotClick(label: string) {
    console.log('Clicked spot:', label);
  }

}
