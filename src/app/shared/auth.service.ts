import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated$ = new BehaviorSubject(true);
  readonly isAuthenticated = this._isAuthenticated$.asObservable();

  getAuthenticated() {
    return this._isAuthenticated$.value;
  }

  login() {
    this._isAuthenticated$.next(true);
  }

  logout() {
    this._isAuthenticated$.next(false);
  }
}
