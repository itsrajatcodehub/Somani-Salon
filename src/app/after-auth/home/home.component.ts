import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { doc, addDoc } from 'firebase/firestore';
import { collection, deleteDoc, Firestore, getDoc, getDocs, QuerySnapshot, updateDoc } from '@angular/fire/firestore';
import { EmployeeComponent } from './employee/employee.component';
import {MatDialog} from '@angular/material/dialog';

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
  
  
  
  
  
  
  
  // NEW SECTION IS FROM HERE
  employeeData: any[] = [];
  itemDoc: any;
  constructor(private http:HttpClient, private firestore: Firestore, private dialog : MatDialog) { }

  ngOnInit(): void {
    getDocs(collection(this.firestore, "employee")).then(
      (querySnapshot: QuerySnapshot) => {
        this.employeeData = [];
        querySnapshot.forEach((doc: any) => { 
          this.employeeData.push(doc.data());
        });
        console.log("data getting",this.employeeData);
        
  }) 
  } 

  headers = ["S.No", "Employees", "Shift", "Status", "Actions"]
  // employeeData = [
  //   {
  //     sno: "1",
  //     employee: "Danish",
  //     shift : "Morning",
  //     status : "Present",

  //   },
  //   {
  //     sno: "2",
  //     employee: "David",
  //     shift : "Evening",
  //     status : "Present",
      
  //   },
  //   {
  //     sno: "3",
  //     employee: "Rohan",
  //     shift : "Morning",
  //     status : "Present",
      
  //   },
  //   {
  //     sno: "4",
  //     employee: "Ritik",
  //     shift : "Morning",
  //     status : "Present",
      
  //   },
  //   {
  //     sno: "5",
  //     employee: "Himanshu",
  //     shift : "Evening",
  //     status : "Present",
      
  //   }
  // ]

  addEmployee(){
    const dialog = this.dialog.open(EmployeeComponent)
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }

  deleteEmployee(){
    deleteDoc(doc(this.firestore,'/employee/')).then((data)=>{
      console.log(data);
      
    }).catch((error) => alert("problem in deleting doc"));

    this.ngOnInit();

  }

  updateEmployee(){

      updateDoc(doc(this.firestore,'employee/mydoc'),{}).then((data)=>{
          console.log('Doc updated');
      })
    }





  services = ["Facial","Haircut","Makeup","Nailing","Hand&Feet","Beard Care","Skin Care","Skin Care","Hair Texture"]

  customers = ["Danish", "David", "Rohan", "ritik", "Himanshu", "Donald", "Mickey"]

  headings = ["S.no", "Name", "Contact"]
  customerData = [
    {
      sno: "1",
      name: "Danish",
      contact : "1234567890",

    },
    {
      sno: "2",
      name: "David",
      contact : "1234567890",
      
    },
    {
      sno: "3",
      name: "Rohan",
      contact : "1234567890",
      
    },
    {
      sno: "4",
      name: "Ritik",
      contact : "1234567890",
      
    },
    {
      sno: "5",
      name: "Himanshu",
      contact : "1234567890",
      
    }
  ]
  


  addCustomer(){
    
  }






  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  // BAR CHART 1

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Total visits',
        backgroundColor: '#2F1A01',
        borderRadius: 10,
        barThickness: 10,
        borderWidth: 0,
      },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }








  // BAR CHART 2 

  public barChartOptions2: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    },
  };
  public barChartType2: ChartType = 'bar';
  public barChartPlugins2 = [
    // DataLabelsPlugin
  ];

  public barChartData2: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [51, 69, 70, 71, 61, 59, 49],
        label: 'Total Sales',
        backgroundColor: '#2F1A01',
        // backgroundColor: '#FFA500',
        borderRadius: 10,
        barThickness: 10,
        borderWidth: 0,
      },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ],
  }

  // events
  public chartClicked2({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered2({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize2(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

  
}
