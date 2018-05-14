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
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.bug = <Bug>{};

    if (this.id) {
      dataService.getBug(this.id).subscribe(
        bug => {
          this.bug = bug;
        },
        error => {
          alert('Cannot retrieve data');
        }
      );
    }
  }

  ngOnInit() {

  }

  onSubmit(bug: Bug) {
    this.dataService.postBug(bug).subscribe(value => {
      this.router.navigate(['']);
    });
  }
}
