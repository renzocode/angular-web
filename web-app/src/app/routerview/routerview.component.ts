import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormBuilder, Validators , FormArray } from '@angular/forms';
import { Observable, Subscriber, pipe, of } from 'rxjs';
import { tap, map, filter, catchError, scan} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-routerview',
  templateUrl: './routerview.component.html',
  styleUrls: ['./routerview.component.scss']
})
export class RouterviewComponent implements  OnInit {
  ngOnInit(){
    this.getConfig().subscribe(data=> {this.dataValue = data});
  }
  dataValue : any;
  constructor(private fb: FormBuilder, private http: HttpClient) { 
  }

	configUrl = "https://jsonplaceholder.typicode.com/todos";
  getConfig(){
  	return this.http.get(this.configUrl); 	
  }
  
  getNumbers(): Observable<number>{
    return of(1,2,3,4,5,6,7);
  }

  showConfig(){
  	this.getConfig().subscribe((data:any)=> this.dataValue = data);
    console.log(this.dataValue);
  }

  observable = new Observable(publisher => {
    console.log(this.dataValue[5].id);
    publisher.next(this.dataValue[5].id);
  });



  addData(){
    console.log(this.dataValue);
    this.observable.subscribe({
      next(x) { console.log("value " + x) },
      error(err) { console.log("error" + err) },
      complete() { console.log("done") }
    });
  };


  showChange(){
     this.observable.pipe(
         filter((n : number) => n % 2 === 0),
         map((x : number) =>  x * 3  ),
         catchError(err => of([]))
       )
      .subscribe(x => {
          console.log(x);
      })
  }


  
  name = new FormControl('');

  /*
  profileForm = new FormGroup({
  	firstName : new FormControl(''),
  	lastName : new FormControl(''),
  	address : new FormGroup({
  		street : new FormControl(''),
  		city : new FormControl(''),
  		state : new FormControl(''),
  		zip : new FormControl('')
  	})
  });

  */
  profileForm = this.fb.group({
  	firstName : ['', Validators.required],
  	lastName : [''],
  	address : this.fb.group({
  		street : [''],
  		city : [''],
  		state : [''],
  		zip : ['']
  	}),
  	aliases : this.fb.array([
  		this.fb.control('')
  	])
  })

  get aliases(){
  	return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
  	this.aliases.push(this.fb.control(''));
  } 

  updateName(){
  	this.name.setValue("renzo");
  }

  onSubmit(){
  	console.warn(this.profileForm.value);
  }

  removeAlias(number){
  	console.log(number);
  	const form = this.profileForm.get('aliases') as FormArray;
  	form.removeAt(number);
  }


}




