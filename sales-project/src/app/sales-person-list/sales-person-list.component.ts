import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("AAJLI","Ahmed","aajli.ahmed@gmail.com",40000),
    new SalesPerson("AAJLI","Fadma","aajli.fadma@gmail.com",50000),
    new SalesPerson("AAJLI","Bouja","aajli.bouja@gmail.com",60000),
    new SalesPerson("AAJLI","abdel","aajli.abdel@gmail.com",128888)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
