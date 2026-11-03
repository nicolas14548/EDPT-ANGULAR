import { Component } from '@angular/core';
import { Menucomponent } from '../menucomponent/menucomponent';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rolcomponent',
  imports: [Menucomponent,RouterOutlet],
  templateUrl: './rolcomponent.html',
  styleUrl: './rolcomponent.css',
})
export class Rolcomponent {}
