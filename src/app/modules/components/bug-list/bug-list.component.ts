import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Bug } from '../../models/bug';

@Component({
  selector: 'br-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs: Bug[];
  columnsAscOrder;

  constructor(private dataService: DataService) {
    this.columnsAscOrder = {
      'title': false,
      'description': false,
      'priority': false,
      'reporter': false,
      'status': false,
      'createdAt': false
    };
  }

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

  sortBy(key) {
    const orderBy = this.columnsAscOrder[key] === true ? 'asc' : 'desc';
    this.bugs.sort(this.compareValues(key, orderBy));
    this.columnsAscOrder[key] = !this.columnsAscOrder[key];
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
