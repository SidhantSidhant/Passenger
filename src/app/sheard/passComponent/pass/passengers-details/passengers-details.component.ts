import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from 'src/app/sheard/modules/pass.interface';

@Component({
  selector: 'app-passengers-details',
  templateUrl: './passengers-details.component.html',
  styleUrls: ['./passengers-details.component.scss']
})
export class PassengersDetailsComponent implements OnInit {
 @Input() getObjectOneByOne !:Ipass;
  remove !:number;
 flag:boolean=true;
  @Output() emiteObjId : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.getObjectOneByOne);
    
  }
  onDoneBtn(fname:string){
     console.log('triggerd', this.flag);
    if(this.flag){
      console.log(fname ,'this the Done');
      this.getObjectOneByOne.fullname = fname; 
    }
  }
  Onremove(){
    this.remove = this.getObjectOneByOne.id;
     this.emiteObjId.emit(this.remove)
  }
}
