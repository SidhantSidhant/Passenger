import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/sheard/modules/pass.interface';
import { PassengerService } from 'src/app/sheard/service/pass.service';

@Component({
  selector: 'app-passengers-dash-bord',
  templateUrl: './passengers-dash-bord.component.html',
  styleUrls: ['./passengers-dash-bord.component.scss']
})
export class PassengersDashBordComponent implements OnInit {
  passengerArray: Ipass[] = []
  checkedCount !: number;

  constructor(private passengers: PassengerService) {

  }
  ngOnInit(): void {
    this.passengerArray = this.passengers.passengers;
    console.log(this.passengerArray);
    this.checkedCount = this.passengerArray.filter((ele: Ipass) => {
      return ele.checkedIn
    }).length
    // console.log(this.checkedCount);

  }
  getId(id: number) {
    this.passengerArray = this.passengerArray.filter((ele: Ipass) => ele.id !== id)
    this.checkedCount = this.passengerArray.filter((ele: Ipass) => {
      return ele.checkInDate
    }).length
  }

}
