import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-peope-details',
  templateUrl: './peope-details.component.html',
  styleUrls: ['./peope-details.component.css']
})
export class PeopeDetailsComponent implements OnInit {

  @Input() info : any; 
  error = false;
  @Output() cancelevent = new EventEmitter();
  @Output() matchevent = new EventEmitter();
 
  ngOnChanges():void{

  }
  MatchIt(){
        this.matchevent.emit(this.info);
      }
  cancel(){
    this.cancelevent.emit(false);
  }
  constructor() { }

  ngOnInit() {
    console.log("init");
  }


}