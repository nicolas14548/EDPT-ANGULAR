import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Aula } from '../../../models/Aula';
import { Aulaservice } from '../../../services/aulaservice';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alistcomponent',
  imports: [MatTableModule, MatIconModule, DatePipe],
  templateUrl: './alistcomponent.html',
  styleUrl: './alistcomponent.css',
})
export class Alistcomponent implements OnInit {

  displayedColumns: string[] = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8']
  dataSource: Aula[] = []

  constructor(private aS: Aulaservice,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerAulas()
  }

  obtenerAulas(): void {
    this.aS.getAulas().subscribe({
      next: data => {
        this.dataSource = data
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }

  eliminarAula(id: number): void {
    this.aS.deleteAula(id).subscribe({
      next: () => {
        this.obtenerAulas()
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }
}
