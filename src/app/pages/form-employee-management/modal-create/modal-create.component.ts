import {Component} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css'
})
export class ModalCreateComponent {
  constructor(private modalRef: NzModalRef) {
  }

  create(): void {

  }

  handleCancel() : void {
    this.modalRef.destroy();
  }
}
