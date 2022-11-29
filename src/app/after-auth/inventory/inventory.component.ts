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
    name: 'Hair',
    children: [
      {
        name: 'Cutting',
        children: [{name: 'Shortcutting'}, {name: 'Longcutting'}, {name: 'Touching'}],
      },
      {
        name: 'Styling',
        children: [{name: 'Shampoo'}, {name: 'Dryer'}],
      },
    ],
  },
  {
    name: 'Makeup',
    children: [
      {
        name: 'Regular',
        children: [{name: 'Party'}, {name: 'BaseMakeup'}, {name: 'Eye Makeup'}],
      },
      {
        name: 'Bride',
        children: [{name: 'Engagement Makeup'}, {name: 'Wedding Makeup'}, {name: 'Reception Makeup'}],
      },
    ],
  },
  {
    name: 'Facial',
    children: [
      {
        name: 'Luxury',
        children: [{name: 'Bleach'}, {name: 'Cleanups'}, {name: 'Treading'}],
      },
      {
        name: 'Regular',
        children: [{name: 'Bleach'}, {name: 'Cleanups'}, {name: 'Treading'}],
      },
    ],
  },
  {
    name: 'Hands & Feets',
    children: [
      {
        name: 'Manicure'
      },
      {
        name: 'Spa Pedicure'
      },
      {
        name: 'Pedicure'
      },
      {
        name: 'Waxing'
      },
      
    ],
  },
  {
    name: 'Nails',
    children: [
      {
        name: 'Nail Paint',
      },
      {
        name: 'Nail Art',
      },
      {
        name: 'Nail Filling',
      },
    ],
  },
  {
    name: 'Skin Care',
    children: [
      {
        name: 'Regular',
        children: [{name: 'Clean Ups'}, {name: 'Facials'}, {name: 'Organic Treatments'}, {name: 'Manicure'}, {name: 'Pedicure'}],
      },
      {
        name: 'Occasion - Premium',
        children: [{name: 'Clean Ups'}, {name: 'Facials'}, {name: 'Organic Treatments'}, {name: 'Manicure'}, {name: 'Pedicure'}],
      },
    ],
  },
  {
    name: 'Beard Grooming',
    children: [
      {
        name: 'Beard Trim',
      },
      {
        name: 'Beard Colour',
      },
      {
        name: 'Beard Styling',
      },
      {
        name: 'Shave',
      },
      {
        name: 'Luxury Shave & Beard Spa',
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
    getDocs(collection(this.firestore, "services")).then(
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
