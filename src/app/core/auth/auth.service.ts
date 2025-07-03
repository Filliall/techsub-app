import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  public isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  login(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    this.isAuthenticatedSubject.next(true);
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log('AuthService getToken() returned:', token);
    return token;
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
