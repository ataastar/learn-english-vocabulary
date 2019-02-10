import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterrogatorComponent } from './interrogator/interrogator.component';

const appRoutes: Routes = [
  {
    path: 'interrogator/:id/:type',
    component: InterrogatorComponent
  },
  {
    path: 'interrogator/:id',
    component: InterrogatorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
