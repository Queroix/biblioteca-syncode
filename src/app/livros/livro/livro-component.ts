import { Component, Input } from "@angular/core";
import { Livro } from "./livro";

@Component({
    selector: 'syn-livrocomponent',
    templateUrl: 'livro-component.html'
})
export class LivroComponent {

    // @Input() id='';
    // @Input() nomeLivro = '';
    // @Input() capaLink = '';
    // @Input() dataPublicacao = '';
    // @Input() nomeAutor = '';
    // @Input() edicao = '';
    // @Input() resumoLivro = '';

    @Input() livro: any;


    changeText: boolean;
    constructor() {
        this.changeText = false;
        this.livro = new Object();
    }
}