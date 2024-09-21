import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private searchCriteria: any = {};
  setSearchCriteria(criteria: any) {
    this.searchCriteria = criteria;
  }
  getSearchCriteria() {
    return this.searchCriteria;
  }
}
