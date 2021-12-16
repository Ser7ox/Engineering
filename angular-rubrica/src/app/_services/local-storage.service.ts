import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../model/account';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({ providedIn: 'root' })

export class LocalStorageService {
   private localStorage: Storage;
   private account = new BehaviorSubject<Account>(null);
   public myData = this.account.asObservable();

   constructor(private LocalStorageRef: LocalStorageRefService) {
      this.localStorage = LocalStorageRef.localStorage;
   }

   setInfo(data: Account) {
      this.localStorage.setItem('myData', JSON.stringify(data));
      this.account.next(data);
      console.log(this.account);
   }

   loadInfo() {
      const data = JSON.parse(this.localStorage.getItem('myData'));
      this.account.next(data);
   }

   clearInfo() {
      this.localStorage.removeItem('myData');
      this.account.next(null);
   }

   clearAllLocalStorage() {
      this.localStorage.clear();
   }
}
