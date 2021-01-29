import { Component, OnInit } from '@angular/core';
import {Register} from './register';
import {FormGroup,FormControl} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup
  reg:Register[]=[]

  

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
this.form = new FormGroup(
  {
    userId: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    phone:new FormControl(""),
    email_Id: new FormControl(""),
    password:new FormControl(""),
    role:new FormControl(""),
    createdOn:new FormControl("")
  })

  } 
  register()
  {
    // this.reg.push(this.form.value)

    this.dataservice.saveData(this.form.value).subscribe
    ((res)=>{alert("data saved successfully")})
  }
  
}
