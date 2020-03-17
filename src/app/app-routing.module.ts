import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';


const routes: Routes = [
  {path:'',redirectTo:'/department',pathMatch:'full'},
  {path:'department',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:"**",component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DepartmentListComponent,EmployeeListComponent,PageNotFountComponent]