import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from 'src/app/livros/livro/livro';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(livros: Livro[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return livros.filter(livro => 
                livro.nomeLivro.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return livros;
        }
    }

}