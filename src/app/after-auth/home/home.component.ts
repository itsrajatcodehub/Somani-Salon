import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() time:string = '04:45 am'
  @Input() date:string = '12 July 2022' 
  @Input() name:string = ' RAJAT'
  @Input() todo:string = 'All I have done this Today'
  @Input() orders:string = '445'
  @Input() income:string = '4578'
  @Input() task_Name:string = 'A'
  @Input() task_date:string = '06 June'
  @Input() task_time:string = '11:00 AM'
  @Input() task_Description:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus exercitationem eveniet,'

  constructor() { }

  ngOnInit(): void {
  }

}
