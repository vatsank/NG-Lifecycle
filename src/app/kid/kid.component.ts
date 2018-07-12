import { Component, OnInit, OnChanges, Input, SimpleChanges, AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit , OnDestroy, OnChanges ,AfterViewInit, AfterContentInit {

   @Input() info: string;
  @Input() firstName: string;
  @Input() lastName: string;

  constructor() {

    console.log('constructor called');
   }

  ngOnInit() {
    console.log('on init called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' on changes called');
    console.log(changes);
    for (const propertyName in changes) {
      if (propertyName) {
      const change = changes[propertyName];
      console.log(change);
      const  current = JSON.stringify(change.currentValue);

      this.firstName = change.currentValue;

       const  previous = JSON.stringify(change.previousValue);
    this.lastName = change.previousValue;
    console.log(propertyName + ':current value :- ' + current + ' :previous value :- ' + previous);
      }
  }

  }
  ngAfterContentInit(){
 
    console.log('After Content init called');
  }

  ngAfterViewInit(){
    console.log('after view init called');

  }

  ngOnDestroy(){
    console.log('second kid removed ===========')
  }
}
