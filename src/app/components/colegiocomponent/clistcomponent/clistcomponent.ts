import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Colegio } from '../../../models/Colegio';
import { Colegioservice } from '../../../services/colegioservice';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clistcomponent',
  imports: [MatTableModule, MatIconModule, DatePipe],
  templateUrl: './clistcomponent.html',
  styleUrl: './clistcomponent.css',
})
export class Clistcomponent implements OnInit {

  displayedColumns: string[] = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']
  dataSource: Colegio[] = []

  constructor(private cS: Colegioservice,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerColegios()
  }

  obtenerColegios(): void {
    this.cS.getColegios().subscribe({
      next: data => {
        this.dataSource = data
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }

  eliminarColegio(id: number): void {
    this.cS.deleteColegio(id).subscribe({
      next: () => {
        this.obtenerColegios()
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }
}
