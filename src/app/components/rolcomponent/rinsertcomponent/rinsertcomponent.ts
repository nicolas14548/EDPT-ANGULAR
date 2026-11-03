import { Component } from '@angular/core';
import { Rolservice } from '../../../services/rolservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RolInsert } from '../../../models/RolInsert';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-rinsertcomponent',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './rinsertcomponent.html',
  styleUrl: './rinsertcomponent.css',
})
export class Rinsertcomponent {

  rolForm: any
  mensaje: string = ''

  constructor(private rS: Rolservice, private fb: FormBuilder) {
    this.rolForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  insertarRol(): void {
    if (this.rolForm.invalid) {
      this.mensaje = 'Por favor, complete todos los campos correctamente!!'
      return
    }
    const rol: RolInsert = {
      nombre: this.rolForm.value.nombre,
      descripcion: this.rolForm.value.descripcion
    }

    this.rS.insertRol(rol).subscribe({
      next: () => {
        this.mensaje = 'Rol insertado correctamente!!'
        this.rolForm.reset()
      },
      error: (error) => {
        this.mensaje = error.error?.message ?? 'Error al insertar el rol!!'
        console.log(error)
      }
    })
  }
}
