import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { NavBarComponent } from "src/app/shared/navbar/navbar-component";

import { Livro } from "../livro/livro";

@Component({
    selector: 'syn-livrolistcomponent',
    templateUrl: './livrolist-component.html'
})
export class LivroListComponent implements OnChanges {
    @Input() livros: Livro[] = [];
    rows: any[] = [];
    @Input() livro: Livro | undefined;

    
    

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.livros)
            this.rows = this.groupColumns(this.livros);
    }


    groupColumns(livros: Livro[]) {
        const newRows = [];

        for (let index = 0; index < livros.length; index += 4) {
            newRows.push(livros.slice(index, index+4));
        }

        return newRows;
    }

}