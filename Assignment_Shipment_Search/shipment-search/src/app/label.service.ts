import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  constructor(private http: HttpClient) {}

  getLabels(): Observable<any> {
    return this.http.get('/assets/labels.json');
  }
}
