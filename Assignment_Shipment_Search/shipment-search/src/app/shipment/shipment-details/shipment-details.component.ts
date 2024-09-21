import { Component, HostListener, OnInit } from '@angular/core';
import { ShipmentDetail, ShipmentsDetails } from '../model/shipment.model';
import { ShipmentService } from 'src/app/shipment.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css'],
})
export class ShipmentDetailsComponent implements OnInit {

  shipmentDetails: ShipmentDetail[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    const shipmentList = ShipmentsDetails.Shipment;
    const criteria = this.shipmentService.getSearchCriteria();
    console.log('Criteria retrieved:', criteria); // Debugging line
    if (!criteria || Object.keys(criteria).length === 0) {
        this.shipmentDetails = shipmentList;
    } else {
        this.shipmentDetails = shipmentList.filter((shipment) => {
            return (
                (!criteria.orderId || shipment.OrderNo.includes(criteria.orderId)) &&
                (!criteria.shipmentNumber ||
                    shipment.ShipmentNo.includes(criteria.shipmentNumber)) &&
                (!criteria.firstName ||
                    shipment.BillToAddress.FirstName.toLowerCase().includes(criteria.firstName.toLowerCase())) &&
                (!criteria.lastName ||
                    shipment.BillToAddress.LastName.toLowerCase().includes(criteria.lastName.toLowerCase())) &&
                (!criteria.emailId ||
                    shipment.BillToAddress.EmailID.toLowerCase().includes(criteria.emailId.toLowerCase())) &&
                (!criteria.phoneNumber ||
                    shipment.BillToAddress.Phonenumber.includes(criteria.phoneNumber))
            );
        });
    }
}


  goBack(): void {
    window.history.back();
  }


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

// for show and hide info icon
  showCompleteInfo = false;

  toggleInfo(): void {
    this.showCompleteInfo = !this.showCompleteInfo;
  }

}
