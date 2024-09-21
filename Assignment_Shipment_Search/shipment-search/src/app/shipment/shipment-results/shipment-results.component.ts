import { Component, HostListener } from '@angular/core';
import { ShipmentList, Shipments } from '../model/shipment.model';
import { MatDialog } from '@angular/material/dialog';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox'; // Import MatCheckboxModule
import { FormsModule } from '@angular/forms';
import { ShipmentService } from 'src/app/shipment.service';
import { Router } from '@angular/router';
import { Shipment } from '../model/shipment.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrls: ['./shipment-results.component.css'],
})
export class ShipmentResultsComponent {
  shipment: ShipmentList[] = [];
  totalData: string = '';
  status: string = '';
  visible: boolean = false;

  //constructor(private shipmentService: ShipmentService) {}
  constructor(
    private route: Router,
    private shipmentService: ShipmentService,
    private http: HttpClient
  ) {}


  isMobileResolution = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenResolution();
  }


  checkScreenResolution(): void {
    // Adjust the threshold as needed (e.g., 768px for mobile)
    this.isMobileResolution = window.innerWidth < 768;
  }
  
  close(): void {
    // Handle close logic here
  }

  isHovered = false;

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }




  shipment1: Shipment[] = [];
  check: any[] = [];

  filteredShipments: Shipment[] = [];

  // Two models for checkboxes
  filters = { status: { inTransit: false, delivered: false } };
  option = { selected: false };

  // Declare the shipments property
  shipments: Shipment[] = []; // Initialize as an empty array

  ngOnInit(): void {
    this.checkScreenResolution();
    // Call any additional initialization logic
    this.getData(); // Call to getData() method if necessary

    console.log('data', this.getData());

  }

  getData() {
    const shipmentList = Shipments.Shipment;
    this.shipments = shipmentList;
    this.totalData = this.shipments.length.toString();
    return this.shipments && this.totalData;
  }
  isDialog = false;

  onclick() {
    if (this.isDialog) {
      this.isDialog = false;
    } else if (!this.isDialog) {
      this.isDialog = true;
    }
  }

  selectedFilters: any = {
    status: null,
    dateRange: null,
  };

  selectAll = false;

  toggleAll() {
    this.options.forEach((item) => (item.selected = this.selectAll));
  }

  goBack(): void {
    window.history.back();
  }

  selectedItem(event: MatCheckboxChange, item: any) {
    const input = event.checked;
    this.check = this.options.filter((item) => item.selected == true);
    return this.check;
  }

  // Method to filter the data based on checkbox values
  applyFilter() {
    const shipmentList = Shipments.Shipment;
    const checkedStatuses = this.check
      .filter((item) => item.selected)
      .map((item) => item.value); // Get the values of selected statuses

    this.shipments = shipmentList.filter((item) => {
      return (
        checkedStatuses.length === 0 || checkedStatuses.includes(item.Status)
      );
    });
    this.totalData = this.shipments.length.toString();
  }

  options = [
    {
      name: 'Ready for Backroom Pick',
      selected: true,
      value: 'Ready for Backroom Pick',
    },
    {
      name: 'Backroom Pick In Progress',
      selected: true,
      value: 'Backroom Pick In Progress',
    },
    {
      name: 'Ready for Customer Pickup',
      selected: true,
      value: 'Ready for Customer Pickup',
    },
    { name: 'Ready for Packing', selected: true, value: 'Ready for Packing' },
    {
      name: 'Packing In Progress',
      selected: true,
      value: 'Packing In Progress',
    },
    { name: 'Packed', selected: true, value: 'Packed' },
    { name: 'Shipped/Picked', selected: true, value: 'Shipped & Picked' },
    { name: 'Cancelled', selected: true, value: 'Cancelled' },
  ];
}
