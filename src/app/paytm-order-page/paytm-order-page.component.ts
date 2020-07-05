import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderServiceService } from '../order-component/order-service.service';
declare var Razorpay: any;

@Component({
  selector: 'app-paytm-order-page',
  templateUrl: './paytm-order-page.component.html',
  styleUrls: ['./paytm-order-page.component.css']
})
export class PaytmOrderPageComponent implements OnInit {
  

  @ViewChild('myButton',{static: false}) myButton : ElementRef;

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
        "color": "#8bf7a8"
    },
    "handler": function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
};

  url:String="https://securegw-stage.paytm.in/theia/processTransaction";
  callback:String="http://localhost:8843/request";

  constructor(private _order:OrderServiceService) { 
     
  }

  ngOnInit() {
     let remains=this._order.sharedMessage;
     console.log("data remaining --"+JSON.stringify(remains));

     this.JSONDATA = JSON.parse(JSON.stringify(remains));

     console.log("JSON view -- "+JSON.stringify(this.JSONDATA) )
    
    // this.MID = JSONDATA.MID;
    // this.WEBSITE=JSONDATA.WEBSITE;
    // this.OID=JSONDATA.ORDER_ID;
    // this.CID=JSONDATA.CUST_ID;
    // this.MOBNO=JSONDATA.MOBILE_NO;
    // this.EMAIL=JSONDATA.EMAIL;
    // this.INDUSID=JSONDATA.INDUSTRY_TYPE_ID;
    // this.CHANNELID=JSONDATA.CHANNEL_ID;
    // this.TXNAMT=JSONDATA.TXN_AMOUNT;
    // this.CALLBACKURL=JSONDATA.CALLBACK_URL;
    // this.CHCKSUM=JSONDATA.CHECKSUMHASH;

    // console.log(this.CHCKSUM)
 
    
  }

  onSubmit(form: any, e: any): void { 
    this.razorPayOptions.order_id=this.JSONDATA.order_id;
    this.razorPayOptions.order_id=this.JSONDATA.amount;

    console.log("razor Options "+this.razorPayOptions);

    e.target.submit();
    var rzp1 = new Razorpay(this.razorPayOptions);
    rzp1.open();
  }

  submit(){
    this.razorPayOptions.order_id=this.JSONDATA.order_id;
    this.razorPayOptions.amount=this.JSONDATA.amount;

    console.log("razor Options "+this.razorPayOptions);

    var rzp1 = new Razorpay(this.razorPayOptions);
    rzp1.open();

  }
}
