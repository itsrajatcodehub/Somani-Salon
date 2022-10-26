import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  panelOpenState = false;
  display = false;
  constructor() { }

  ngOnInit(): void {
  }


  click(){
    this.display = true;
  }
}
