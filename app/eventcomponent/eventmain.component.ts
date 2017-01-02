import { Component } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';


@Component({
  selector: 'print-component',
  template: `<div>Print</div>`
})

export class EventComponent { }
export const EventRoutes: Route[] = [{ path: 'createEventRules', component: EventComponent }];
