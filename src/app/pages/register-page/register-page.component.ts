import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  userModel=new User();
  RegisterResponse = '';
  RegisterClass = '';
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  FormSubmit(){
    this.auth.register(this.userModel).subscribe(
      (response:any) =>{
        // console.log(response);
        this.RegisterResponse = 'Registered Successfully'
        this.RegisterClass = 'alert-success'
        this.router.navigateByUrl('home')
      },(error) =>{
        // console.log(error);
        this.RegisterResponse = `Registration failed, ${error.error.message}`
        this.RegisterClass = 'alert-danger'
      }
    );
  }

}
