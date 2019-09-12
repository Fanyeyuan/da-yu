import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  pass: string;
  checked = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onBackHome() {
    this.router.navigate(['']);
  }

  onSubmit() {

    console.log(this.name, this.pass, this.checked);
    this.router.navigate(['pages']);

  }
}
