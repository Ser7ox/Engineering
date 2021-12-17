import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../model/account';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({ providedIn: 'root' })

export class LocalStorageService {

   public localStorage: Storage;
   public utenteLoggato: Account;
   private account = new BehaviorSubject<Account>(null);
   public myData = this.account.asObservable();


   constructor(private LocalStorageRef: LocalStorageRefService) {
      this.localStorage = LocalStorageRef.localStorage;
      this.utenteLoggato = JSON.parse(this.localStorage.getItem('myData'));
      if (this.utenteLoggato) {
         this.account.next(this.utenteLoggato);
      } else {
         this.account.next(null);
      } 
   }

   setInfo(data: Account) {
      this.localStorage.setItem('myData', JSON.stringify(data));
      this.account.next(data);
      this.utenteLoggato = data;
   }

   loadInfo() {
      const data = JSON.parse(this.localStorage.getItem('myData'));
      this.account.next(data);
   }

   clearInfo() {
      this.localStorage.removeItem('myData');
      this.account.next(null);
      this.utenteLoggato = null;
   }

   clearAllLocalStorage() {
      this.localStorage.clear();
      this.utenteLoggato = null;
   }
}
