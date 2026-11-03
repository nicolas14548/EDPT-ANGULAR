import { Component } from '@angular/core';
import { Aulaservice } from '../../../services/aulaservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AulaInsert } from '../../../models/AulaInsert';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ainsertcomponent',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule],
  templateUrl: './ainsertcomponent.html',
  styleUrl: './ainsertcomponent.css',
})
export class Ainsertcomponent {

  aulaForm: any
  mensaje: string = ''

  constructor(private aS: Aulaservice, private fb: FormBuilder) {
    this.aulaForm = this.fb.group({
      idColegio: [null, [Validators.required, Validators.min(1)]],
      grado: ['', Validators.required],
      seccion: ['', Validators.required],
      estado: [true]
    });
  }

  insertarAula(): void {
    if (this.aulaForm.invalid) {
      this.mensaje = 'Por favor, complete todos los campos correctamente!!'
      return
    }
    const aula: AulaInsert = {
      idColegio: this.aulaForm.value.idColegio,
      grado: this.aulaForm.value.grado,
      seccion: this.aulaForm.value.seccion,
      estado: this.aulaForm.value.estado
    }

    this.aS.insertAula(aula).subscribe({
      next: () => {
        this.mensaje = 'Aula insertada correctamente!!'
        this.aulaForm.reset({ estado: true })
      },
      error: (error) => {
        this.mensaje = error.error?.message ?? 'Error al insertar el aula!!'
        console.log(error)
      }
    })
  }
}
