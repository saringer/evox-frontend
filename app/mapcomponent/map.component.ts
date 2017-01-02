import { Component } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';


@Component({
  selector: 'map-component',
  template: `
    <div>work in progress</div>`
})

export class MapComponent {}

export const MapRoutes: Route[] = [{   path: 'showPreviewData', component: MapComponent },
  {   path: '', component: MapComponent }];
