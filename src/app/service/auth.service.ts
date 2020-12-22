import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  signup(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
