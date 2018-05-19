import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bug } from '../models/bug';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OrderBy } from '../models/orderBy';

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

  putBug(bug: Bug): Observable<Bug> {
    return this.httpClient.put<Bug>(environment.endpoint + '/bugs/' + bug.id, bug);
  }

  getSortedBugs(page: number, size: number, orderBy?: OrderBy): Observable<Bug[]>{
    let url = environment.endpoint + '/bugs?';
    url += 'page=' + page + '&size=' + size;

    if(orderBy){
      const order = orderBy.isAsc ? 'asc' : 'desc';
      url += '&sort=' + orderBy.column + ',' + order;
    }

    return this.httpClient.get<Bug[]>(url);
  }
}
