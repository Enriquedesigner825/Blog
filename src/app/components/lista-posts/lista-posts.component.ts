import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {



  arrPosts: Post[];
  categorias: string[]

  postsService = inject(PostsService);

  constructor() {
    this.arrPosts = [];
    this.categorias = [];
  }


  ngOnInit() {
    this.arrPosts = this.postsService.getAll();
    this.categorias = this.postsService.getCategorias();

  }
  cambiarCategoria($event: any) {
    if ($event.target.value === 'todos') {
      this.arrPosts = this.postsService.getAll();
    } else {
      this.arrPosts = this.postsService.getByCategoria($event.target.value)
    }
  }


}
