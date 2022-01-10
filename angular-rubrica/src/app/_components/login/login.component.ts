import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/_model/account';
import { AccountService } from 'src/app/_services/account.service';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { CookieService } from 'ngx-cookie';
import { Subscription } from 'rxjs';

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
  loading = false;
  error = '';
  submitted: boolean = false;
  roleSub: Subscription;
  email: string;

  constructor(private fb: FormBuilder, private cookieService: CookieService, private localStorageService: LocalStorageService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

    this.login = this.fb.group({
      email: [undefined,[Validators.required]],
      password: [undefined,[Validators.required]]
    })

    this.roleSub = this.localStorageService.myData.subscribe(data => {
      if (data) {
        this.email = data.email;
      }
    })
    
    if ( this.localStorageService.utenteLoggato ) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    
  }

  onSubmit(): void {
    this.submitted = true;
    const account = new Account(
      this.login.get('email').value,
      this.login.get('password').value,
      undefined
    );
    this.loading = true;
    this.accountService.checkLogin(account.email, account.password).subscribe(
      (data) => {
        if (data) {
          setTimeout(()=>{
            this.localStorageService.setInfo(data);
            this.cookieService.put('email', this.email);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.reloadPage();
          }, 200);
        } else {
          setTimeout(()=>{
            this.isLoginFailed = true;
            this.localStorageService.clearAllLocalStorage();
            this.loading = false;
          }, 200);
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.roleSub) {
      this.roleSub.unsubscribe;
    }
  }

  clearInfo() {
    this.localStorageService.clearInfo();
  }

  clearAll() {
    this.localStorageService.clearAllLocalStorage();
  }

  reloadPage(): void {
    this.router.navigate(['persona']);
  }

}

// lifecycle componenti
// generare un cookie nelle richieste con l'email dell'utente su service


// searchbase paginator per webkit OK
// alert per massimo 10 persone webkit OK