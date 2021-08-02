import { Component, Input } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'syn-devolvercomponent',
    templateUrl: 'devolver-component.html'
})
export class DevolverComponent{
    closeResult = '';
    // @Input() nomeLivro ='';
    // @Input() id ='';
    @Input() livro: any;

    constructor(private modalService: NgbModal) { }

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log(this.closeResult);
        
    }

    updateDevolver(){
        this.livro.isDisponivelParaEmprestimo = true
        console.log(this.livro);
        
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