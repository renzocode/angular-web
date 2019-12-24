import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import { RouterviewComponent } from './routerview/routerview.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';


const routes: Routes = [
	{
		path : 'view' , 
		component: ViewcomponentComponent
	},
	{
		path : 'routerView',
		component : RouterviewComponent
	},
	{
		path : 'register-user',
		component : RegisterUserComponent
	},
	{
		path : 'confirm-user',
		component : ConfirmUserComponent
	},
	{
		path : '',
		component : RegisterUserComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
