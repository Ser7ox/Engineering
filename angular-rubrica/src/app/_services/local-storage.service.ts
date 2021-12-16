import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../model/account';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({ providedIn: 'root' })

export class LocalStorageService {
   private localStorage: Storage;
   public account = new BehaviorSubject<Account>(null);

   constructor(private LocalStorageRef: LocalStorageRefService) {
      this.localStorage = LocalStorageRef.localStorage;
   }

   setInfo(data: Account) {
      this.localStorage.setItem('myData', JSON.stringify(data));
      this.account.next(data);
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
