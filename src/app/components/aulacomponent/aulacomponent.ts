import { Component } from '@angular/core';
import { Menucomponent } from '../menucomponent/menucomponent';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aulacomponent',
  imports: [Menucomponent,RouterOutlet],
  templateUrl: './aulacomponent.html',
  styleUrl: './aulacomponent.css',
})
export class Aulacomponent {}
