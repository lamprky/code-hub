import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Bug } from '../../models/bug';
import { ColumnOrder } from '../../models/column-order';
import { NgClass} from '@angular/common';

@Component({
  selector: 'br-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[];
  columnsOrder: ColumnOrder[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getBugs().subscribe(
      bugs => {
        this.bugs = bugs;
        this.setColumnsOrder(this.bugs);
      },
      error => {
        alert('Cannot retrieve data');
      }
    );
  }

  private setColumnsOrder(bugs: Bug[]) {
    if (bugs) {
      this.columnsOrder = Object.keys(bugs[0]).map(
        key => <ColumnOrder>{ column: key, isAsc: null }
      );
    }
  }

  private getColumnOrderFor(key): ColumnOrder {
    return this.columnsOrder && this.columnsOrder.find(colOrder => colOrder.column === key);
  }

  public hasAscOrder(key): boolean{
    const columnOrder = this.getColumnOrderFor(key);
    return columnOrder != null && columnOrder.isAsc === true;
  }

  public hasDescOrder(key): boolean{
    const columnOrder = this.getColumnOrderFor(key);
    return columnOrder != null && columnOrder.isAsc === false;
  }

  private getOrderByForKey(columnOrder: ColumnOrder, key:string):string{
    return columnOrder.isAsc === null || columnOrder.isAsc === false
    ? 'asc'
    : 'desc';
  }

  private clearOtherOrders(key){
      this.columnsOrder.forEach((column) =>{
          if(column.column !== key){
            column.isAsc = null;
          }
      });
  }

  sortBy(key) {
    const columnOrder = this.getColumnOrderFor(key);
    if (columnOrder) {
      const orderBy = this.getOrderByForKey(columnOrder, key);
      this.clearOtherOrders(key);
      this.bugs.sort(this.compareValues(key, orderBy));
      columnOrder.isAsc = !columnOrder.isAsc;
    }
  }

  compareValues(key, order = 'asc') {
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
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
}
