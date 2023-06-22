import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactgroupsComponent } from './contactgroups/contactgroups.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'contactgroups',component:ContactgroupsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'list/:group',component:ListComponent},
  {path:'',redirectTo:'/contactgroups',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
