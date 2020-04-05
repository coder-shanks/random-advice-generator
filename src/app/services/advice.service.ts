import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  url = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getRandomAdvice(): any {
    return this.http.get(this.url);
  }
}
