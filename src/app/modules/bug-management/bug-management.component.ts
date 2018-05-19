import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormOptionsService } from '../services/form-options.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bug } from '../models/bug';

@Component({
  selector: 'br-bug-management',
  templateUrl: './bug-management.component.html',
  styleUrls: ['./bug-management.component.scss']
})
export class BugManagementComponent implements OnInit {
  id: string;
  bug: Bug;

  // TODO: it is better to retrieve data in onInit. Constructor is only for variables initialization
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.bug = <Bug>{};
  }

  ngOnInit() {
    if (this.id) {
      this.dataService.getBug(this.id).subscribe(
        bug => {
          this.bug = bug;
        },
        error => {
          alert('Cannot retrieve data');
        }
      );
    }
  }

  onSubmit(bug: Bug) {
    if (bug.id) {
      this.dataService.putBug(bug).subscribe(value => {
        this.router.navigate(['']);
      });
    } else {
      this.dataService.postBug(bug).subscribe(value => {
        this.router.navigate(['']);
      });
    }
  }
}
