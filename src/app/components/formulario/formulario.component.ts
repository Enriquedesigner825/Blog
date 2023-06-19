import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;


  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ])
    });
  }

  onSubmit() {
    console.log(this.formulario.value)
  }
}
