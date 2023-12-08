import {Component, OnInit} from '@angular/core';
import {Employee} from "../../interface/Employee";
import {EmployeeService} from "../../service/EmployeeService";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {ModalCreateComponent} from "./modal-create/modal-create.component";

@Component({
  selector: 'app-form-employee-management',
  templateUrl: './form-employee-management.component.html',
  styleUrl: './form-employee-management.component.css'
})
export class FormEmployeeManagementComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private modalService: NzModalService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  openModalCreate(): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Thêm mới nhân viên',
      nzContent: ModalCreateComponent,
      nzFooter: null,
      nzWidth: 800,
    });
  }
}
