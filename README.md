## Create a New project ng new  ngLifecyle

## Create a Component  ng g c kid

export class KidComponent implements OnInit 

constructor() {

    console.log('constructor called');
   }

  ngOnInit() {
    console.log('on init called');
  }

## Nest the Kid  Component into App Component 
<app-kid></app-kid>

## Observe the Developer Tool Console should print 
constructor called
on init called
## Implement the OnChanges Interface

ngOnChanges(changes: SimpleChanges){
    console.log(' on changes called');
  }

## Observe the Developer Tool Console should print 
constructor called
on changes called
on init called
## update the app.component.ts
export class AppComponent  {
  title = 'app';
  userName: string;
}
## Update the app-component.html
<input type='text' name='userName' [(ngModel)]='userName'>
<app-kid [info]="userName"></app-kid>

## Observe the Developer Tool Console should print 
constructor called
on changes called
on init called
on changes called // this gets printed many times as you enter values in the text-field

## Update the kid Component class
export class KidComponent implements OnInit , OnChanges , AfterContentInit {

  ngAfterContentInit(){
 
    console.log('After Content init called');
          alert('4');
  }

}

## Change the app.component.html
<app-kid [info]="'Ramesh'">
    <h2>I am from parent</h2>
</app-kid>

## Add the following lines to  kid.component.html
<div>
    <ng-content></ng-content>
</div>

## Observe the Developer Tool Console should print 
constructor called
on changes called
on init called
After Content init called

##    Add AfterViewInit to the existing interface in kids.component.ts
  ngAfterViewInit(){
    console.log('after view init called');
  }
## Observe the Developer Tool Console should print 

constructor called
on changes called
on init called
After View init called

##    Add onDestory to the existing interface in kids.component.ts
  ngOnDestroy(){
    console.log('second kid removed ===========')
  }

## Observe the Developer Tool Console should print 

constructor called
on changes called
on init called
After View init called
second kid removed ===========

# Lifecycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
