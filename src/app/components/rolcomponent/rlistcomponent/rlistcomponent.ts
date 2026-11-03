import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Rol } from '../../../models/Rol';
import { Rolservice } from '../../../services/rolservice';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rlistcomponent',
  imports: [MatTableModule, MatIconModule, DatePipe],
  templateUrl: './rlistcomponent.html',
  styleUrl: './rlistcomponent.css',
})
export class Rlistcomponent implements OnInit {

  displayedColumns: string[] = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6']
  dataSource: Rol[] = []

  constructor(private rS: Rolservice,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerRoles()
  }

  obtenerRoles(): void {
    this.rS.getRoles().subscribe({
      next: data => {
        this.dataSource = data
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }

  eliminarRol(id: number): void {
    this.rS.deleteRol(id).subscribe({
      next: () => {
        this.obtenerRoles()
        this.cdr.detectChanges()
      }, error: err => {
        console.log(err)
        this.cdr.detectChanges()
      }
    })
  }
}
