import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare var $: any;

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ],
})
export class RsvpComponent implements OnInit {
  form: FormGroup | undefined;
  showForm = false;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) { 
  }
  
  items: Observable<any[]> | undefined;

  ngOnInit() {
    this.items = this.db.list('rsvps').valueChanges();
  }

  checkPassword(val: any) {
    if(val === "carole42&colt3"){
      this.showForm = true;
    }
    $("#RSVPifyIFrame").hide();
    // $("#RSVPifyIFrame").appendTo("#rsvp-section");
  }

}
