import { Component, EventEmitter, Output } from "@angular/core"
import { Subject } from "rxjs"
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'syn-navbar',
    templateUrl: 'navbar-component.html'
})
export class NavBarComponent {

    @Output() newItemEvent = new EventEmitter<string>();

    @Output() filter = '';


    addNewItem(value: string) {
        this.filter = value;
        console.log(this.filter);
        this.newItemEvent.emit(this.filter);
    }


}