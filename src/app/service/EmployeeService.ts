import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Employee} from "../interface/Employee";

export const fakeEmployees: Employee[] = [
  { Id: '1', UserName: 'user1', FullName: 'User One', Password: 'pass1', Address: 'Address 1', Age: 25 },
  { Id: '2', UserName: 'user2', FullName: 'User Two', Password: 'pass2', Address: 'Address 2', Age: 30 },
  { Id: '3', UserName: 'user3', FullName: 'User Three', Password: 'pass3', Address: 'Address 3', Age: 35 },
  { Id: '4', UserName: 'user4', FullName: 'User Four', Password: 'pass4', Address: 'Address 4', Age: 40 },
  { Id: '5', UserName: 'user5', FullName: 'User Five', Password: 'pass5', Address: 'Address 5', Age: 45 },
  { Id: '6', UserName: 'user6', FullName: 'User Six', Password: 'pass6', Address: 'Address 6', Age: 50 },
  { Id: '7', UserName: 'user7', FullName: 'User Seven', Password: 'pass7', Address: 'Address 7', Age: 55 },
  { Id: '8', UserName: 'user8', FullName: 'User Eight', Password: 'pass8', Address: 'Address 8', Age: 60 },
  { Id: '9', UserName: 'user9', FullName: 'User Nine', Password: 'pass9', Address: 'Address 9', Age: 65 },
  { Id: '10', UserName: 'user10', FullName: 'User Ten', Password: 'pass10', Address: 'Address 10', Age: 70 },
];

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    // Using fake data for demonstration
    return of(fakeEmployees);
  }
}
