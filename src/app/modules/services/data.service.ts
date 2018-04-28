import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private endpoint = 'api/bugs';

  constructor(private httpClient: HttpClient) { }

  getBugs(): Observable<Array<Bug>> {
    return this.httpClient.get<Bug[]>(this.endpoint);
  }
}
