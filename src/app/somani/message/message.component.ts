import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddmessageComponent } from './addmessage/addmessage.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  openDialog(){
    this.dialog.open(AddmessageComponent);
  }
  ngOnInit(): void {
  }

}
