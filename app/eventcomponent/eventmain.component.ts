import { Component } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';


@Component({
  selector: 'event-component',
  template: `<div>event definition here</div>`
})

export class EventComponent { }
export const EventRoutes: Route[] = [{ path: 'createEventRules', component: EventComponent }];
