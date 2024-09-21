import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipmentService } from 'src/app/shipment.service';
import { ShipmentList, Shipments, ShipmentsDetails } from 'src/app/shipment/model/shipment.model';
import { LabelService } from 'src/app/label.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-search',
  templateUrl: './shipment-search.component.html',
  styleUrls: ['./shipment-search.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ShipmentSearchComponent {
  // Inject all services into a single constructor
  constructor(
    private route: Router,
    private shipmentService: ShipmentService,
    private labelService: LabelService
  ) {}

  labels: any = {};

  ngOnInit() {
    // Load the labels on initialization
    this.labelService.getLabels().subscribe((data) => {
      this.labels = data.home; // Assign home labels to the labels variable
    });
  }

  navigatetoresult() {
    this.route.navigate(['shipment/results']);
  }

  formData = {
    orderId: '',
    shipmentNumber: '',
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
  };
  onSubmit(form: any) {
    const hasSearchData = Object.values(this.formData).some((value) => !!value);

    if (!hasSearchData) {
      this.route.navigate(['shipment/results']);
    } else {
      this.shipmentService.setSearchCriteria(this.formData);
      this.route.navigate(['shipment/details']);
    }
  }

  resetForm(form: any) {
    form.resetForm();
  }
}
