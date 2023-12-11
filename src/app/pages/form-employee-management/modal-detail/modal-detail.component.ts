import {Component, Injector, Input, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {EmployeeService} from "../../../service/EmployeeService";
import {Employee} from "../../../interface/Employee";

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrl: './modal-detail.component.css'
})
export class ModalDetailComponent implements OnInit {
  @Input() employeeDetail?: any;

  employee: Employee = {
    Id: '',
    UserName: '',
    FullName: '',
    Password: '',
    Address: '',
    Age: 0
  };

  ngOnInit(): void {
    this.employee = this.employeeDetail;
  }

  constructor(private modalRef: NzModalRef) {
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

}
