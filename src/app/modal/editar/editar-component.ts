import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'syn-editarcomponent',
    templateUrl: 'editar-component.html'
})
export class EditarComponent {
    closeResult = '';

    @Input() livro: any;


    constructor(private modalService: NgbModal, private http: HttpClient) { }

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log(this.closeResult);

    }

    updateLivro() {
        let API = 'https://home.adaptei.com.br/biblioteca/api/livro';
        let chave = {
            headers: new HttpHeaders({
                'xAuthorization': '3DF53382-6595-4ED8-AAD5-B41EFCFD0162'
            })
        }
        let url = `${API}/${this.livro.id}`;

        let nomeLivro = document.querySelector("#inputNomeLivro")
        let capaLink = document.querySelector("#inputLinkCapa");
        let nomeAutor = document.querySelector("#inputAutor");
        let edicao = document.querySelector("#inputEdicao");
        let resumoLivro = document.querySelector("#inputResumo");
        console.log(nomeLivro);
        
        let addLivro = { nomeLivro, capaLink, dataPublicacao: '11-11-1111', nomeAutor, edicao, resumoLivro };
        console.log(addLivro);

        this.http.put(url, addLivro, chave).subscribe(data => {
            console.log(data);
        })

    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            console.log('esc');

            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            console.log('click fora');
            return 'by clicking on a backdrop';
        } else {

            console.log('algo');
            return `with: ${reason}`;
        }
    }

}