import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Bug } from '../../models/bug';
import { OrderBy } from '../../models/orderBy';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'br-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[];
  orderBy: OrderBy = { isAsc: true, column: '' };
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getBugs().subscribe(
      bugs => {
        this.bugs = bugs;
      },
      error => {
        alert('Cannot retrieve data');
      }
    );
  }

  public getOrderClass(key: string): string {
    return (this.orderBy.column === key) ? (this.orderBy.isAsc ? 'fa fa-angle-down' : 'fa fa-angle-up') : '';
  }

  sortBy(key: string) {
    if (this.orderBy.column === key) {
      this.orderBy.isAsc = !this.orderBy.isAsc;
    } else {
      this.orderBy = { isAsc: true, column: key };
    }

    this.bugs.sort(this.compareValues(this.orderBy));
  }

  compareValues(orderBy: OrderBy) {
    const key = orderBy.column;
    const isAsc = orderBy.isAsc;

    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return isAsc === false ? comparison * -1 : comparison;
    };
  }

  gotoAddNew() {
    this.router.navigate(['addbug']);
  }
}
