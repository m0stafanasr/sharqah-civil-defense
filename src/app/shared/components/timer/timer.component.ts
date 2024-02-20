import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy {
  totalSeconds: number = 0;
  private timerId: any;
constructor(){}
  ngOnInit() {
    this.totalSeconds = 0;
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.totalSeconds++;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  get formattedTime() {
    const hours = Math.floor(this.totalSeconds / 3600);
    const minutes = Math.floor((this.totalSeconds % 3600) / 60);
    const seconds = this.totalSeconds % 60;

    return `${this.padNumber(hours)}.${this.padNumber(minutes)}.${this.padNumber(seconds)}`;
  }

  private padNumber(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}
