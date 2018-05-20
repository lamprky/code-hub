import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Bug } from '../models/bug';
import { OrderBy } from '../models/orderBy';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { FormOptionsService } from '../services/form-options.service';
import { IComment } from '../models/comment';
import { PaginationData } from '../models/pagination-data';

@Component({
  selector: 'br-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[];
  orderBy: OrderBy = { isAsc: true, column: '' };
  displayCommentList: boolean[];
  totalItems: number;
  pageItems: number;

  constructor(
    private dataService: DataService,
    public formOptionsService: FormOptionsService,
    private router: Router
  ) {
    this.pageItems = +formOptionsService.getPageOptions()[0].value;
  }

  ngOnInit() {
    this.dataService.getBugs().subscribe(
      bugs => {
        this.totalItems = bugs.length;
        this.getSortedBugs(0, this.pageItems);
      },
      error => {
        alert('Cannot retrieve data');
      }
    );
  }

  public getOrderClass(key: string): string {
    return this.orderBy.column === key
      ? this.orderBy.isAsc
        ? 'fa fa-angle-down'
        : 'fa fa-angle-up'
      : '';
  }

  sortBy(key: string) {
    if (this.orderBy.column === key) {
      this.orderBy.isAsc = !this.orderBy.isAsc;
    } else {
      this.orderBy = { isAsc: true, column: key };
    }

    this.getSortedBugs(0, this.pageItems, this.orderBy);
  }

  gotoAddNew() {
    this.router.navigate(['addbug']);
  }

  toggleDisplay(index) {
    this.displayCommentList[index] = !this.displayCommentList[index];
  }

  onPageChanged(pd: PaginationData) {
    this.pageItems = pd.pageItems;
    if (this.orderBy.column === '') {
      this.getSortedBugs(pd.currentPage, pd.pageItems);
    } else {
      this.getSortedBugs(pd.currentPage, pd.pageItems, this.orderBy);
    }
  }

  private getSortedBugs(page: number, size: number, orderBy?: OrderBy) {
    this.dataService.getSortedBugs(page, size, orderBy).subscribe(
      bugs => {
        this.bugs = bugs;
        this.displayCommentList = new Array<boolean>(this.bugs.length);
      },
      error => {
        alert('Cannot retrieve data');
      }
    );
  }
}
