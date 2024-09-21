import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentSearchComponent } from './home/shipment-search/shipment-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ShipmentSearchComponent},
  { path: 'shipment', loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule )},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
