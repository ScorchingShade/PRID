import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from './order-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PayDialogComponent } from './pay-dialog/pay-dialog.component';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class NewErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  numberFormControl = new FormControl('', [
    Validators.required,
  ]);

  productFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new NewErrorStateMatcher();

  mobno:String;email:String;amount:String; currency:String;

  data:any;

  constructor(private _order:OrderServiceService,private route: ActivatedRoute,private router: Router,public dialog: MatDialog,private _snackBar: MatSnackBar) { 
    
  }

  ngOnInit() {
  }

  onOrder(){

    this.data={mobno:this.mobno,email:this.email,amount:this.amount,currency:this.currency}
    console.log("here is the data"+JSON.stringify(this.data))

    if(this.amount!=undefined && this.mobno!=undefined && this.email!=undefined){
      this._snackBar.open('The amount to be paid is: '+this.amount, 'Amount', {
        duration: 6000,
      });

      //Saving this for using in razor pay ui placeholder
      this._order.razorUiPredefinedData=this.data;

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
    else{
      this._snackBar.open('Please fill all the fields before paying!', 'Okay', {
        duration: 3000,
      });
    }
    


   
  }

}
