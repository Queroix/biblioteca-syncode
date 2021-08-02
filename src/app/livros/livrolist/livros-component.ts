import { Component, Input, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";

import { Livro } from "../livro/livro";
import { LivroService } from "../livro/livro-service";

@Component({
    selector: 'syn-livroscomponent',
    templateUrl: 'livros-component.html'
})
export class LivrosComponent implements OnInit {

    livros: Livro[] = [];
    livros2: Livro[] = [];

    @Output() filter = '';
    @Input() filtro = '';

    constructor(private livroService: LivroService) { }

    ngOnInit(): void {
        this.livroService.getFromAPI()
            .subscribe(livros => this.livros = livros);
            
        // this.livroService.setOnAPI();
        // this.livroService.removeFromAPI('7DE8AA9D-5863-4FB4-BFEC-1FFE7593563A')
    }


}