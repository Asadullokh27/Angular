// testdata.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-testdata',
  template: `
    <h2>{{ testdata }}</h2>
    <app-test [data]="testdata" (dataChanged)="onDataChanged($event)"></app-test>
  `
})
export class TestdataComponent {
  testdata: string = '';

  onDataChanged(data: string) {
    this.testdata = data; // Update the parent component's data
  }
}
