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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBugs().subscribe((bugs) => {
      this.bugs = bugs;
    }, (error) => {
      alert('Cannot retrieve data');
    });
  }

}
