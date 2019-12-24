import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl , FormGroup, FormBuilder, 
  NgForm, Validators , FormArray } from '@angular/forms';
import { Observable, Subscriber, pipe, of } from 'rxjs';


export interface Confirm {
  key   : string,
  value : string
}

export class ConfirmValue implements Confirm{
  key : string = null;
  value : string = null;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {



  type_of_doc = [
    'DNI' , 'Carnet de extranjeria'
  ]

  constructor(private _fb : FormBuilder, private _router : Router){ 

  }

  daf = 
    { first_Name : '', last_Name : '',  type_of_document : '', document: '',
    user : ''  , password : '' , confirm_password: '' , are_you_sure: false }
   

  profileForm = this._fb.group({
    first_Name : ['',[ Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    last_Name  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    type_of_document  : ['', Validators.required],
    document : ['', [ Validators.required, Validators.pattern('^[0-9]*$')]],
    user      : ['', [ Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    password  : ['', Validators.required],
    confirm_password : ['', Validators.required],
    are_you_sure : [false, Validators.required]  
  });


  ngOnInit() {
    this.profileForm;
    this.update();
    this.onValueChanges();
  }

  onValueChanges() {
    this.profileForm.valueChanges.subscribe(val => {
      for(var key_name in val){        
        if(val.hasOwnProperty(key_name)){
          if(val[key_name]==""){
           if(sessionStorage.getItem(key_name)!=""){
             if(val[key_name] === false){
               sessionStorage.setItem(key_name, val[key_name]);
             }else{
                 sessionStorage.setItem(key_name, sessionStorage.getItem(key_name));
             }
           }else{
             sessionStorage.setItem(key_name, val[key_name]);
           }
          }else{
            sessionStorage.setItem(key_name, val[key_name]);
          }
        }
      }
      this.update();     
    });
  }

  update(){
    for(var s in this.daf){
      this.daf[s] = sessionStorage.getItem(s);
    }
  }

  
  onFormSubmit(){
    this._router.navigate(['/confirm-user']);
  } 
}
