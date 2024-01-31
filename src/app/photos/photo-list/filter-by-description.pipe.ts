import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

// Este é um filtro personalizado em Angular para filtrar uma lista de fotos com base na descrição.
@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  
  // Recebe um array de fotos e uma string de consulta para a descrição.
  transform(photos: Photo[], descriptionQuery: string) {

    // Remove espaços em branco e converte a consulta para minúsculas para comparação.
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    // Filtra as fotos cuja descrição inclui a consulta, retornando o resultado.
    // Se a consulta estiver vazia, retorna a lista de fotos inalterada.
    if (descriptionQuery)  photos.filter(photo => 
        photo.description.toLowerCase().includes(descriptionQuery))
    return photos;
  }
}
