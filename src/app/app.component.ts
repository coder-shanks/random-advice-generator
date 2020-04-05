import { Component } from '@angular/core';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'random-advice-gen';
  advice: string;
  constructor(private adviceService: AdviceService) {}

  onButtonClick() {
    this.advice = '';
    this.adviceService.getRandomAdvice().subscribe((data) => {
      this.advice = data.slip.advice;
    });
  }
}
