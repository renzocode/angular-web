import { Component, OnInit } from '@angular/core';

export interface Confirm {
	key   : string,
	value : string
}

export class ConfirmValue implements Confirm{
	key : string = null;
	value : string = null;
}

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

  constructor() { }

  array = [
  	'first_Name', 'last_Name' , 'type_of_document', 'document',
    'user'   , 'password' , 'confirm_password', 'are_you_sure'
  ]

  confirmValue : ConfirmValue[] = [];

  confirm : ConfirmValue;

  getValue(){
   	for(var i = 0; i < this.array.length; i++){
   		this.confirm = new ConfirmValue();
   		this.confirm.key = this.array[i];
   		this.confirm.value = sessionStorage.getItem(this.confirm.key);
   		this.confirm.key = this.confirm.key.split("_").join(" ");
   		this.confirmValue.push(this.confirm);	
   	}
  }

  ngOnInit() {
  	this.getValue();
  }

}
