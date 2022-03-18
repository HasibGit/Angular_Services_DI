import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ManageUsersService } from '../shared/manage-users.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {

  constructor(private dataService: DataService, private manageUsers: ManageUsersService) { }

  ngOnInit(): void {
  }

  inactiveUsers = this.dataService.inactiveUsers;

  setAsActive(name: string, index: number) {
    this.manageUsers.setAsActive(name, index);
  }

}
