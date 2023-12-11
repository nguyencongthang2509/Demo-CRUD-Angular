import {Component, OnInit} from '@angular/core';
import {Employee} from "../../interface/Employee";
import {EmployeeService} from "../../service/EmployeeService";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {ModalCreateComponent} from "./modal-create/modal-create.component";
import {ModalDetailComponent} from "./modal-detail/modal-detail.component";
import {ModalUpdateComponent} from "./modal-update/modal-update.component";

@Component({
  selector: 'app-form-employee-management',
  templateUrl: './form-employee-management.component.html',
  styleUrl: './form-employee-management.component.css'
})
export class FormEmployeeManagementComponent implements OnInit {

  employees: Employee[] = [];
  searchValue: string = "";

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
    const instance = modalRef.getContentComponent();
    instance.employees = this.employees;
  }

  openModalDetail(employee: Employee): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Chi tiết nhân viên',
      nzContent: ModalDetailComponent,
      nzFooter: null,
      nzWidth: 800,
    });
    const instance = modalRef.getContentComponent();
    instance.employeeDetail = employee;
  }

  openModalUpdate(employee: Employee): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Cập nhật nhân viên',
      nzContent: ModalUpdateComponent,
      nzFooter: null,
      nzWidth: 800,
    });
    const instance = modalRef.getContentComponent();
    instance.employeeDetail = employee;
  }

  openDeleteConfirmation(employeeId: string): void {
    this.modalService.confirm({
      nzTitle: 'Xác nhận xóa',
      nzContent: 'Bạn có chắc muốn xóa nhân viên này?',
      nzOkText: 'Xóa',
      nzOnOk: () => this.deleteEmployee(employeeId),
      nzCancelText: 'Hủy',
    });
  }

  deleteEmployee(employeeId: string) {
    this.employeeService.deleteEmployee(employeeId);
  }

  search(): void {
    this.employees = this.employeeService.searchEmployees(this.searchValue);
  }
}
