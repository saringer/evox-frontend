import { MapComponent, MapRoutes  } from './mapcomponent/map.component';
import { EventComponent, EventRoutes } from './eventcomponent/eventmain.component';
import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';


export const routes: Routes = [
  ...MapRoutes,
  ...EventRoutes
];

export const routing = RouterModule.forRoot(routes);
