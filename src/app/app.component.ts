import { Component, ElementRef, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild(HelloComponent, { static: true }) hello1: HelloComponent;
  @ViewChild('hello') hello2: HelloComponent;
  @ViewChild('hello', { read: ElementRef }) hello3: ElementRef;
  @ViewChild('hello', { read: ViewContainerRef }) hello4: ViewContainerRef;

  constructor(public element: ElementRef) {}

  ngOnInit() {
    console.log('ngOnInit element:', this.element.nativeElement);
    console.log('ngOnInit hello 1:', this.hello1);
    console.log('ngOnInit hello 2:', this.hello2);
    console.log('\n');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit hello 1:', this.hello1);
    console.log('ngAfterViewInit hello 2:', this.hello2);
    console.log('ngAfterViewInit hello 2:', this.hello2.name);
    this.hello2.printName();

    console.log('ngAfterViewInit hello 3:', this.hello3.nativeElement);
    console.log('ngAfterViewInit hello 3:', (this.hello3.nativeElement as HTMLElement).textContent);

    console.log('ngAfterViewInit hello 4:', this.hello4.element.nativeElement);
    console.log('\n');
  }
}
