import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';

const routes: Routes = [
	{
		path : 'view' , component: ViewcomponentComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
