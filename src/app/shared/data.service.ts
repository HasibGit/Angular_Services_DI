import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  activeUsers: string[] = [
    "Hasib",
    "Riaz",
    "Tushar",
    "Tanzim"
  ]

  inactiveUsers: string[] = [
    "Neaz",
    "Joy",
    "Fahim",
    "Mahedi"
  ]

  constructor() { }
}
