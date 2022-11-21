import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { AddComponent } from './add/add.component';
import {MatDialog} from '@angular/material/dialog';
import { collection, Firestore } from '@angular/fire/firestore';
import { getDoc, doc, addDoc, getDocs, QuerySnapshot  } from 'firebase/firestore';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  panelOpenState = false;
  display = false;
    items: any[] = [];
  constructor(private dialog : MatDialog, private firestore: Firestore) { 
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    getDocs(collection(this.firestore, "inventory")).then(
      (querySnapshot: QuerySnapshot) => {
        this.items = [];
        querySnapshot.forEach((doc: any) => { 
          this.items.push(doc.data());
        });
        console.log("data getting",this.items);
        
  })
  }


  click(){
    this.display = true;
  }


  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



  openDialog(){
    const dialog = this.dialog.open(AddComponent)
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    })
  }
}
