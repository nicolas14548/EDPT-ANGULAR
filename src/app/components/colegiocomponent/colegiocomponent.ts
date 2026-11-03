import { Component } from '@angular/core';
import { Menucomponent } from '../menucomponent/menucomponent';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-colegiocomponent',
  imports: [Menucomponent,RouterOutlet],
  templateUrl: './colegiocomponent.html',
  styleUrl: './colegiocomponent.css',
})
export class Colegiocomponent {}
