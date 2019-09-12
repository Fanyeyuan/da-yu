import { Component, OnInit } from '@angular/core';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  currentDate: Date;
  private dateHandle: any;


  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.dateHandle = setInterval(() => {
      this.currentDate.setTime(Date.now());
    }, 1000);
  }

  beforeDestroy() {
    clearInterval(this.dateHandle);
  }
}
