import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {EmployeeService} from "../../../service/EmployeeService";
import {Employee} from "../../../interface/Employee";

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrl: './modal-update.component.css'
})
export class ModalUpdateComponent implements OnInit {
  @Input() employeeDetail?: any;

  employee: Employee = {
    Id: '',
    UserName: '',
    FullName: '',
    Password: '',
    Address: '',
    Age: 0
  };

  constructor(private modalRef: NzModalRef, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    if (this.employeeDetail) {
      this.employee = {...this.employeeDetail};
    }
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  errorUsername: string = '';
  errorFullName: string = '';
  errorPassword: string = '';
  errorAddress: string = '';
  errorAge: string = '';

  update(): void {
    let check = 0;
    if (this.employee.UserName.trim() === "") {
      this.errorUsername = "Username không được để trống";
      check++;
    } else {
      this.errorUsername = "";
    }
    if (this.employee.FullName.trim() === "") {
      this.errorFullName = "FullName không được để trống";
      check++;
    } else {
      this.errorFullName = "";
    }
    if (this.employee.Password.trim() === "") {
      this.errorPassword = "Password không được để trống";
      check++;
    } else {
      this.errorPassword = "";
    }
    if (this.employee.Address.trim() === "") {
      this.errorAddress = "Address không được để trống";
      check++;
    } else {
      this.errorAddress = "";
    }
    if (this.employee.Age <= 0) {
      this.errorAge = "Tuổi phải là số nguyên dương";
      check++;
    } else {
      this.errorAge = "";
    }
    if (check === 0) {
      this.employeeService.updateEmployee(this.employee);
      this.modalRef.destroy();
    }
  }
}
