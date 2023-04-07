import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers-count',
  templateUrl: './passengers-count.component.html',
  styleUrls: ['./passengers-count.component.scss']
})
export class PassengersCountComponent implements OnInit {
 @Input() count !:number;
@Input() ArrayLength !:number;
 constructor() { }

  ngOnInit(): void {
  }

}
