import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(next => {
      console.log('Registred Successfully');
    }, error => {
      console.log(error);
    });
  }

  cancel(){
    console.log('canceled');
  }

}
