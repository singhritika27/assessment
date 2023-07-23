import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  {path:'',redirectTo:'assessment',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'assessment',component:AssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
