import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MixedchartComponent } from './mixedchart/mixedchart.component';
import { Chart2Component } from './chart2/chart2.component';
import { Chart1Component } from './chart1/chart1.component';
const routes: Routes = [
  { path: '', component: MixedchartComponent },
  // { path: '/chart1', component: Chart1Component },
  // { path: '/chart2', component: Chart2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
