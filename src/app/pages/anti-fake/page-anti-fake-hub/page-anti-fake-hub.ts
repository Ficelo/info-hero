import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-page-anti-fake-hub',
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './page-anti-fake-hub.html',
  standalone: true,
  styleUrl: './page-anti-fake-hub.css'
})
export class PageAntiFakeHub {

}
