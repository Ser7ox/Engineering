import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/_services/account.service';
import { LocalStorageService } from 'src/app/_services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean;
  errorMessage = '';

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: [undefined,[Validators.required]],
      password: [undefined,[Validators.required]]
    })

  }

  onSubmit(): void {

    const account = new Account(
      this.login.get('email').value,
      this.login.get('password').value
    );

    this.accountService.checkLogin(account.email, account.password).subscribe(
      (data) => {
        this.localStorageService.setInfo(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error => {
        this.isLoginFailed = true;
      }
    );
  }

  clearInfo() {
    this.localStorageService.clearInfo();
  }

  clearAll() {
    this.localStorageService.clearAllLocalStorage();
  }

  reloadPage(): void {
    this.router.navigate(['persona/rubrica']);
  }

}
