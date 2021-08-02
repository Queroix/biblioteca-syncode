import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LivroService } from "src/app/livros/livro/livro-service";

@Component({
    selector: 'syn-excluircomponent',
    templateUrl: 'excluir-component.html'
})
export class ExcluirComponent {
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

    removeFromAPI() {
        let API = 'https://home.adaptei.com.br/biblioteca/api/livro';
        const chave = {
            headers: new HttpHeaders({
                'xAuthorization': '3DF53382-6595-4ED8-AAD5-B41EFCFD0162'
            })
        }
        let url = `${API}/${this.livro.id}`;

        // console.log(url);
        // console.log('remove');
        this.http.delete(url, chave).subscribe(data => {
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