import { Component } from '@angular/core';
import { Colegioservice } from '../../../services/colegioservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColegioInsert } from '../../../models/ColegioInsert';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cinsertcomponent',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './cinsertcomponent.html',
  styleUrl: './cinsertcomponent.css',
})
export class Cinsertcomponent {

  colegioForm: any
  mensaje: string = ''

  constructor(private cS: Colegioservice, private fb: FormBuilder) {
    this.colegioForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      distrito: ['', Validators.required]
    });
  }

  insertarColegio(): void {
    if (this.colegioForm.invalid) {
      this.mensaje = 'Por favor, complete todos los campos correctamente!!'
      return
    }
    const colegio: ColegioInsert = {
      nombre: this.colegioForm.value.nombre,
      direccion: this.colegioForm.value.direccion,
      distrito: this.colegioForm.value.distrito
    }

    this.cS.insertColegio(colegio).subscribe({
      next: () => {
        this.mensaje = 'Colegio insertado correctamente!!'
        this.colegioForm.reset()
      },
      error: (error) => {
        this.mensaje = error.error?.message ?? 'Error al insertar el colegio!!'
        console.log(error)
      }
    })
  }
}
