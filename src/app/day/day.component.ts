import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() min : Number;
  @Input() max : Number;
  @Input() date : String;
  @Input() image : Number;
  
  
  ngOnInit() {
  }

}
