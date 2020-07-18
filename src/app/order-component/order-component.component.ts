import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from './order-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PayDialogComponent } from './pay-dialog/pay-dialog.component';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  mobno:String;email:String;amount:String; currency:String;

  data:any;

  constructor(private _order:OrderServiceService,private route: ActivatedRoute,private router: Router,public dialog: MatDialog) { 
    
  }

  ngOnInit() {
  }

  onOrder(){
    this.data={mobno:this.mobno,email:this.email,amount:this.amount,currency:this.currency}
    console.log(this.data)

    let sender=this._order.postData(this.data).subscribe(data=>{

      console.log("data-- "+JSON.stringify(data));

      this._order.sharedMessage=data;
      console.log("Shared message\n"+JSON.stringify(this._order.sharedMessage));

      // this.router.navigate(["/payment"])
      const dialogRef = this.dialog.open(PayDialogComponent);
      
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      

    })

   
  }

}
