import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ManageUsersService } from '../shared/manage-users.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']

})
export class ActiveComponent implements OnInit {

  constructor(private dataService: DataService, private manageService: ManageUsersService) { }

  ngOnInit(): void {
  }

  activeUsers = this.dataService.activeUsers;

  setAsInactive(name: string, index: number) {
    this.manageService.setAsInactive(name, index);
  }

}
