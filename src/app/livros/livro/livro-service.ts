import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Livro } from './livro';

const API = 'https://home.adaptei.com.br/biblioteca/api/livro';
const chave = {
    headers: new HttpHeaders({
        'xAuthorization': '3DF53382-6595-4ED8-AAD5-B41EFCFD0162'
    })
}

const teste = {
    nomeLivro: 'Teste',
    capaLink: 'https://m.media-amazon.com/images/I/418VHfMQlqL.jpg',
    dataPublicacao: '2018-05-18',
    nomeAutor: 'Natan Souza',
    edicao: '1',
    resumoLivro: 'Lorem Ipsum Description'
};
@Injectable({ providedIn: 'root' })
export class LivroService {

    constructor(private http: HttpClient) { }

    getFromAPI() {
        return this.http.get<Livro[]>(API, chave);
    }

    setOnAPI() {
        this.http.post(API, teste, chave).toPromise().then(data => {
            console.log(data);
        });
    }

    // removeFromAPI(id: string) {
    //     const url = `${API}/${id}`;
        
    //     console.log(url);
    //     console.log('remove');
        
        
    //     this.http.delete(url,chave);
    // }
}