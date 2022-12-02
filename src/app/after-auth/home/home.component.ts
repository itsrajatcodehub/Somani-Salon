import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { doc, addDoc } from 'firebase/firestore';
import { collection, deleteDoc, Firestore, getDoc, getDocs, QuerySnapshot, updateDoc } from '@angular/fire/firestore';
import { EmployeeComponent } from './employee/employee.component';
import {MatDialog} from '@angular/material/dialog';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // NEW SECTION IS FROM HERE
  employeeData: any[] = [];
  customersData: any[] = [];
  servicesData: any[] = [];
  itemDoc: any;
  constructor(private http:HttpClient, private firestore: Firestore, private dialog : MatDialog) { }

  ngOnInit(): void {
    // EMPLOYEE DATA
    getDocs(collection(this.firestore, "employee")).then(
      (querySnapshot: QuerySnapshot) => {
        this.employeeData = [];
        querySnapshot.forEach((doc: any) => { 
          this.employeeData.push({...doc.data(),id:doc.id});
        });
        console.log("data getting",this.employeeData);
  }) 

    // CUSTOMER DATA 
    getDocs(collection(this.firestore, "customers")).then(
      (querySnapshot: QuerySnapshot) => {
        this.customersData = [];
        querySnapshot.forEach((doc: any) => { 
          this.customersData.push({...doc.data(),id:doc.id});
        });
        console.log("data getting",this.customersData);
  }) 

  // SERVICES DATA 
  getDocs(collection(this.firestore, "services")).then(
    (querySnapshot: QuerySnapshot) => {
      this.servicesData = [];
      querySnapshot.forEach((doc: any) => { 
        this.servicesData.push({...doc.data(),id:doc.id});
      });
      console.log("data getting",this.servicesData);
}) 
  } 

  // customers heading
  headings = ["S.no", "Name", "Contact", "Actions"]
  
  // employees heading
  headers = ["S.No", "Employees", "Shift", "Status", "Actions"]

  // service heading
  header = ["S.no.", "Services", "Actions"]

  addEmployee(){
    const dialog = this.dialog.open(EmployeeComponent)
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }

  deleteEmployee(id:string){
    deleteDoc(doc(this.firestore,'/employee/' + id)).then((data)=>{
      console.log(data);
    }).catch((error) => alert("problem in deleting doc"));

    this.ngOnInit();

  }

  updateEmployee(employee:any){
      const dialog = this.dialog.open(EditEmployeeComponent, {
        data: employee
      })
      dialog.componentInstance.close.subscribe(()=>{
        dialog.close();
        this.ngOnInit();
      });

    }



  addCustomer(){
    const dialog = this.dialog.open(AddCustomerComponent);
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }

  updateCustomer(customers:any){
    const dialog = this.dialog.open(EditCustomerComponent,{
      data : customers
    })
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }

  deleteCustomer(id:string){
    deleteDoc(doc(this.firestore,'/customers/' + id)).then((data)=>{
      console.log(data);
    }).catch((error) => alert("problem in deleting doc"));

    this.ngOnInit();
  }




  addServices(){
    const dialog = this.dialog.open(AddServiceComponent);
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }
 

  updateService(services : any){
    const dialog = this.dialog.open(EditServiceComponent,{
      data: services
    })
    dialog.componentInstance.close.subscribe(()=>{
      dialog.close();
      this.ngOnInit();
    });
  }

  deleteService(id:string){
    deleteDoc(doc(this.firestore,'/services/' + id)).then((data)=>{
      console.log(data);
    }).catch((error) => alert("problem in deleting doc"));

    this.ngOnInit();
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
