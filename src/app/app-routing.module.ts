import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { NewTranferenceComponent } from './new-transference/new-transference.component';
import { StatementComponent } from './statement/statement.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'statement',
    pathMatch: 'full'
  },
  {
    path: 'statement',
    component: StatementComponent
  },
  {
    path: "new-transfer",
    component: NewTranferenceComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
