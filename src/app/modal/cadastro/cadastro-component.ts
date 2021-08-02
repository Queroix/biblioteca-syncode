import { Component } from "@angular/core";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from "src/app/livros/livro/livro-service";

@Component({
    selector: 'syn-cadastrocomponent',
    templateUrl: 'cadastro-component.html'
})
export class CadastroComponent {
    closeResult = '';

    changeText: boolean;

    private service = LivroService;

    constructor(private modalService: NgbModal) {
        this.changeText = false;
     }

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        
    }

    onSubmit(data :any){
        console.warn(data);
        
    }

    createLivro(){
        let nomeLivro = document.querySelector("#inputNomeLivro");
        let capaLink = document.querySelector("#inputLinkCapa");
        let nomeAutor = document.querySelector("#inputAutor");
        let edicao = document.querySelector("#inputEdicao");
        let resumoLivro = document.querySelector("#inputResumo");

        let addLivro = { nomeLivro, capaLink, dataPublicacao: '11-11-1111', nomeAutor, edicao, resumoLivro };
        console.log(addLivro);
    }

    // setOnAPI() {
    //     this.http.post(API, teste, chave).toPromise().then(data => {
    //         console.log(data);
    //     });
    // }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {  
            console.log('esc');
            
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            console.log('click fora');
            return 'by clicking on a backdrop';
        } else {    
            
            console.log('esc');
            return `with: ${reason}`;
        }
    }

}