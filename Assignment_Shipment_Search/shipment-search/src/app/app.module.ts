import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShipmentSearchComponent } from './home/shipment-search/shipment-search.component';
import { ShipmentService } from './shipment.service';
import { LabelService } from 'src/app/label.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCheckboxModule,
    ShipmentSearchComponent,
    HttpClientModule
  ],
  providers: [ShipmentService,LabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
