import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: "10 consejos para mejorar tu productividad en el trabajo",
        texto: "En este artículo, te compartimos algunas estrategias efectivas para aumentar tu productividad en el trabajo y lograr mejores resultados. Desde técnicas de gestión del tiempo hasta métodos de organización, descubre cómo maximizar tu eficiencia y alcanzar tus metas profesionales.",
        autor: "Juan Pérez",
        imagen: "https://asesorias.com/empresas/wp-content/uploads/2020/02/Productividad-laboral.jpg",
        fecha: 2023 - 5 - 1,
        categoria: "Productividad laboral"
      },
      {
        titulo: "Las claves para una alimentación saludable",
        texto: "Descubre los fundamentos de una alimentación equilibrada y sus beneficios para tu salud. En este artículo, te brindamos consejos prácticos y fáciles de seguir para mejorar tus hábitos alimenticios y disfrutar de una vida más saludable.",
        autor: "María Gómez",
        imagen: "https://www.paho.org/sites/default/files/alimentacao-saudavel-diversificada.jpg",
        fecha: 2023 - 5 - 10,
        categoria: "Salud y bienestar"
      },
      {
        titulo: "Los mejores destinos para viajar en verano",
        texto: "Si estás planeando tus vacaciones de verano, no te pierdas esta lista de destinos increíbles. Desde playas paradisíacas hasta ciudades llenas de historia, te presentamos una selección de lugares ideales para disfrutar de tu tiempo libre y crear recuerdos inolvidables.",
        autor: "Carlos Rodríguez",
        imagen: "https://imagenes.elpais.com/resizer/DT61xqCYiQ5D3ABQV-jQA1uKbXU=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HPQ4KOUIH4ZZY52ACTFPLH6GKE.jpg",
        fecha: 2023 - 6 - 1,
        categoria: "Viajes y turismo"
      },
      {

        titulo: "Cómo mantener un estilo de vida activo y saludable",
        texto: "En este post, te damos consejos prácticos para incorporar la actividad física en tu rutina diaria y adoptar un estilo de vida activo y saludable. Descubre los beneficios de moverte regularmente y cómo hacer ejercicio de manera divertida y motivadora.",
        autor: "Laura Sánchez",
        imagen: "https://elblogdesalud.com/wp-content/uploads/2023/02/estilos-vida-activos.jpg",
        fecha: 2023 - 6 - 7,
        categoria: "Salud y bienestar"
      },
      {
        titulo: "Consejos para emprendedores: cómo iniciar tu propio negocio",
        texto: "Si sueñas con ser tu propio jefe y emprender un negocio, este artículo es para ti. Aquí encontrarás valiosos consejos y pasos clave para convertir tu idea en una realidad empresarial. Desde la planificación inicial hasta la gestión financiera, descubre cómo comenzar tu camino hacia el éxito emprendedor.",
        autor: "Ana Torres",
        imagen: "https://www.negociosenventa.es/img/blog_big/9_25_08_2016_02_38_34_negocios-baratos-emprender-2016jpg_blog_big.jpg",
        fecha: 2023 - 6 - 15,
        categoria: "Emprendimiento"
      }]
  }
  create(post: Post): void {
    this.arrPosts.push(post)
  }
  getAll(): Post[] {
    return this.arrPosts;
  }
  getByCategoria(categoria: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === categoria)
  }
  getCategorias(): string[] {
    return [...new Set(this.arrPosts.map(post => post.categoria))];
  }
}
