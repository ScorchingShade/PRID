import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrderServiceService } from '../order-service.service';
declare var Razorpay: any;

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.css']
})
export class PayDialogComponent implements OnInit {

  order_id:String;
  MOBNO:String;
  EMAIL:String;
  amount:String;
  currency:String;
  JSONDATA:any;


  razorPayOptions = {
    "key": 'rzp_test_0VoyRtTV4KRbJ0', // Enter the Key ID generated from the Dashboard
    "amount": '', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
    "currency": "INR",
    "name": "Pride Dairy",
    "description": "Pride Dairy bill payment",
    "order_id":"ORDERID_FROM_BACKEND",
    "image": "assets/prideLogo.png",
    "notes": {
        "address": "Thank you for being a part of our endeavour"
    },
    "prefill": {
      "name": "Ankush Sharma",
      "email": "Ankush@ank.com",
      "contact": "9999999999"
  },
    "theme": {
        "color": "#1392eb"
    },
    "handler": function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
};

  callback:String="http://localhost:8843/request";



  constructor(private _order:OrderServiceService,public dialogRef: MatDialogRef<PayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) {

     }

  ngOnInit() {
    let remains=this._order.sharedMessage;
    this.amount=this._order.sharedMessage.amount;
    console.log("amount\n"+this.amount);
     console.log("data remaining --"+JSON.stringify(remains));

     this.JSONDATA = JSON.parse(JSON.stringify(remains));

     console.log("JSON view -- "+JSON.stringify(this.JSONDATA) )
    
  }

   submit(){
    this.razorPayOptions.order_id=this.JSONDATA.order_id;
    this.razorPayOptions.prefill.name=this._order.razorUiPredefinedData.name;
    this.razorPayOptions.amount=this.JSONDATA.amount+'00';
    this.razorPayOptions.prefill.email=this._order.razorUiPredefinedData.email;
    this.razorPayOptions.prefill.contact=this._order.razorUiPredefinedData.mobno;
  
    console.log("razor Options "+this.razorPayOptions);
  
    var rzp1 = new Razorpay(this.razorPayOptions);
    rzp1.open();

    this.dialogRef.close();
    
  
  
  }
  
  cancel(){
    this.dialogRef.close();
  }

}
