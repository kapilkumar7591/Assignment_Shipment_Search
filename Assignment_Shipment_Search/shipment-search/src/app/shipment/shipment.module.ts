import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentRoutingModule } from './shipment-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShipmentResultsComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class ShipmentModule { }
