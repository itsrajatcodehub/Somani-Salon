import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsAndNotificationsService } from 'src/app/services/alerts-and-notifications.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  servicesControl:FormControl = new FormControl()
  services:any[] = [
    {
      name:"Hair Cut",
      description:"Hair Cut"
    },
    {
      name:"Nail Cut",
      description:"Nail Cut"
    },
    {
      name:"Hair wash",
      description:"Hair wash"
    },
    {
      name:"Hair Color",
      description:"Hair Color"
    },
    {
      name:"Hair Steaming",
      description:"Hair Steaming"
    },
  ]
  gstNo:string = "cqppf5995s"
  today:Date = new Date()
  billNo:string = "324"
  servicesForm:FormGroup = new FormGroup({})
  billForm:FormGroup = new FormGroup({
    customerName:new FormControl(),
    customerEmail:new FormControl(),
    customerPhone:new FormControl(),
    customerAddress:new FormControl(),
    services:this.servicesForm,
    finalCost:new FormControl(),
    discount:new FormControl(),
    tax:new FormControl(),
  })
  finalCost:number = 0;
  totalTax:number = 0;
  totalDiscount:number = 0;
  appliedDiscount:number = 0;
  addedControls:any[] = []
  addControls(event:any){
    // remove all controls
    this.addedControls.forEach((control)=>{
      this.servicesForm.removeControl(control.control.name)
      this.servicesForm.removeControl(control.quantityControl.name)
    })
    this.addedControls = []
    console.log(event)
    event.value.forEach((service:any)=>{
      let control = new FormControl(0,Validators.required)
      let quantityControl = new FormControl(1,Validators.required)
      this.servicesForm.addControl(service.name,control)
      this.servicesForm.addControl(service.name+"Quantity",quantityControl)
      this.addedControls.push({control:control,name:service.name,quantityControl:quantityControl,quantityControlName:service.name+"Quantity"})
    })
  }
  constructor(private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService) { }
  calculateBill(){
    let prices = []
    let totalPrice = 0
    this.addedControls.forEach((item)=>{
      prices.push(item.control.value)
      totalPrice += (Number(item.control.value) * Number(item.quantityControl.value))
    })
    let finalCost = (totalPrice - Number(this.billForm.value.discount)) + this.billForm.value.tax
    this.totalTax = finalCost/100 * this.billForm.value.tax
    this.totalDiscount = this.billForm.value.discount
    this.finalCost = finalCost
    this.billForm.patchValue({finalCost:finalCost})
    console.log(this.totalTax,this.totalDiscount,this.finalCost)
  }
  ngOnInit(): void {
    this.billForm.valueChanges.subscribe((data)=>{
      this.calculateBill()
    })  
    this.servicesForm .valueChanges.subscribe((data)=>{
      this.calculateBill()
    })  
  }
  saveAndPrint(){
    if (this.billForm.valid){
      console.log(this.billForm.value)
      this.printBill()
      this.databaseService.addTransaction(this.billForm.value).then((data)=>{
        this.alertify.presentToast("Transaction added successfully")
        this.ngOnInit()
      }).catch((err)=>{
        this.alertify.presentToast("Error adding transaction")
      })
    }
  }

  printBill(){
    (document.querySelector("app-root") as HTMLElement).style.display = "none";
    (document.querySelector(".cdk-overlay-container") as HTMLElement).style.visibility = "hidden";
    const div = document.createElement("div")
    div.id = "bill"
    div.style.visibility = "visible"
    div.innerHTML = document.querySelector("#billMain")!.innerHTML
    document.body.appendChild(div)
    document.querySelector("body")!.appendChild(div);
    setTimeout(()=>{
      window.print();
      (document.querySelector("app-root") as HTMLElement).style.display = "block";
      (document.querySelector(".cdk-overlay-container") as HTMLElement).style.visibility = "visible";
      document.body.removeChild(div)
    },200);
  }
}
