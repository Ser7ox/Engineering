import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { UserCardComponent } from './components/table/user-card/user-card.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'card', component: UserCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }