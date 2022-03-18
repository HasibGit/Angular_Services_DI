import { Injectable } from '@angular/core';
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

  constructor(private dataService: DataService) { }

  activeUsers = this.dataService.activeUsers;
  inactiveUsers = this.dataService.inactiveUsers;

  setAsActive(name: string, index: number) {
    this.inactiveUsers.splice(index, 1);
    this.activeUsers.push(name);
  }

  setAsInactive(name: string, index: number) {
    this.activeUsers.splice(index, 1);
    this.inactiveUsers.push(name);
  }

}
