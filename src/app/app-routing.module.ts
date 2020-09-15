import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoneFormComponent } from './component/lone-form/lone-form.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  { path: 'applyforlone', component: LoneFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
