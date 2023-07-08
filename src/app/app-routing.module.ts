import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';

const routes: Routes = [{path:'',component: DashboardComponent},{path:'addemployee',component: FormComponent},{path:'**',component: ErrorpageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
