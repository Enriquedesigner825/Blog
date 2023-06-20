import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  postsService = inject(PostsService)


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

  onClick() {
    const response = this.postsService.create(this.formulario.value)
  }

}
