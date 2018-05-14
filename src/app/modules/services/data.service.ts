import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getBugs(): Observable<Array<Bug>> {
    return this.httpClient.get<Bug[]>(environment.endpoint + '/bugs');
  }

  getBug(id: string): Observable<Bug> {
    return this.httpClient.get<Bug>(environment.endpoint + '/bugs/' + id);
  }

  postBug(bug: Bug): Observable<Bug> {
    return this.httpClient.post<Bug>(environment.endpoint + '/bugs', bug);
  }
}
