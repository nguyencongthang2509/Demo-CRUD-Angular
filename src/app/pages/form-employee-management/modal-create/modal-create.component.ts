import {Component, Injector, Input, OnInit} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {Employee} from "../../../interface/Employee";
import {EmployeeService} from "../../../service/EmployeeService";

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrl: './modal-create.component.css'
})
export class ModalCreateComponent implements OnInit {
  @Input() employees?: any;

  constructor(private modalRef: NzModalRef, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    console.log(this.employees);
  }

  employee: Employee = {
    Id: '',
    UserName: '',
    FullName: '',
    Password: '',
    Address: '',
    Age: 0
  };

  errorUsername: string = '';
  errorFullName: string = '';
  errorPassword: string = '';
  errorAddress: string = '';
  errorAge: string = '';

  create(): void {
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
      this.employeeService.addEmployee(this.employee);
      this.modalRef.destroy();
    }
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }
}
