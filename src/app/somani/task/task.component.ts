import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
title = 'watch';
min: any = '0' + 0;
sec: any = '0' + 0;

  constructor() { }

  ngOnInit(): void {
  }

}
