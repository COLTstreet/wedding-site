import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/compat/firestore';


export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss']
})
export class LodgingComponent implements OnInit {
  emails: any;

  constructor(public dialog: MatDialog, db: AngularFirestore) { 
    this.emails = db.collection<DialogData>('/emails');
  }

  email: any;
  emailList = [];

  ngOnInit() {
    // if (window.matchMedia("(max-width: 700px)").matches) { 
    //   document.getElementById("jaxLink").textContent = "JAX";
    // }
    // let svc = this;
    // setTimeout(function(){ 
    //   svc.openDialog(); 
    // }, 1000);

    // this.emails.valueChanges().subscribe(e => { 
    //   for(let name of e) {
    //     this.emailList.push(name.email);
    //   }
    //   console.log(this.emailList.join());
    // });
  }

  openDialog(): void {
    let width = "50vw";
    if (window.matchMedia("(max-width: 700px)").matches) { // If media query matches
      width = "90vw";
    }
    const dialogRef = this.dialog.open(EmailDialog, {
      width: width,
      data: {name: this.email}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.email = result;
        this.emails.add({ email: this.email });
      }
    });
  }

}

@Component({
  selector: 'email-dialog',
  templateUrl: 'email-dialog.html',
})
export class EmailDialog {

  constructor(
    public dialogRef: MatDialogRef<EmailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
