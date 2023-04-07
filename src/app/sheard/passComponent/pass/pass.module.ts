import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengersCountComponent } from './passengers-count/passengers-count.component';
import { PassengersDetailsComponent } from './passengers-details/passengers-details.component';
import { PassengersDashBordComponent } from './passengers-dash-bord/passengers-dash-bord.component';
import { PassengerService } from '../../service/pass.service';



@NgModule({
  declarations: [
    PassengersDashBordComponent,
    PassengersCountComponent,
    PassengersDetailsComponent,
   
  ],
  imports: [
    CommonModule
  ],
  exports : [PassengersDashBordComponent],
  providers:[PassengerService]
})
export class PassModule { }
