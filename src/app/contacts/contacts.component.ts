import { Component,OnInit } from '@angular/core';
import { groupModel } from '../contactgroups/contactgroup.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactModel } from './contact.model';
import { ContactservicesService } from '../services/contactservices.service';
import { GroupservicesService } from '../services/groupservices.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  groupData!: groupModel[];

  contactForm!: FormGroup;
  contactMOdelObj: contactModel = new contactModel();
  contactData!: contactModel[];
  selectedgroup!:string;
  imagePath:string= "../../assets/";

  constructor( private  Groupservices:GroupservicesService,private contactservices:ContactservicesService,private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.contactForm= this.formbuilder.group({
      firstname:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      lastname:['',[Validators.required]],
      group:['',[Validators.required]],
      phonenumber:['',[Validators.required]],
     
     })
    
    this.getgroup();
    this.getcontact();   
  }
  getgroup() {
    this.Groupservices.getgroup().subscribe(res => {
      this.groupData = res;
    })
  }

 
  
  getcontact() {
    this.contactservices.getcontact().subscribe(res => {
      this.contactData = res;
    })
  }

  postcontact() {
    console.log(this.contactForm.value);
    this.contactMOdelObj.firstname = this.contactForm.value.firstname;
    this.contactMOdelObj.lastname = this.contactForm.value.lastname;
    this.contactMOdelObj.group = this.contactForm.value.group;
    this.contactMOdelObj.phonenumber = this.contactForm.value.phonenumber;
    
    this.contactservices.postcontact(this.contactMOdelObj)
      .subscribe(res => {
        console.log(res);
        alert('Contact Added Succesfully')
        this.contactForm.reset();
        this.getcontact();
      })
  }
 
  deletecontact(row: any) {
    this.contactservices.deletecontact(row.id)
      .subscribe(res => {
        alert("Contact Delete");
        this.getcontact();
      })
  }
  onEdit(row: any) {
    this.contactMOdelObj.id = row.id;
    this.contactForm.controls['firstname'].setValue(row.firstname);
    this.contactForm.controls['lastname'].setValue(row.lastname);
    this.contactForm.controls['group'].setValue(row.group);
    this.contactForm.controls['phonenumber'].setValue(row.phonenumber);
    
  }
  updatecontact() {
    this.contactMOdelObj.firstname = this.contactForm.value.firstname;
    this.contactMOdelObj.lastname = this.contactForm.value.lastname;
    this.contactMOdelObj.group = this.contactForm.value.group;
    this.contactMOdelObj.phonenumber = this.contactForm.value.phonenumber;
   
    
    this.contactservices.updatecontact(this.contactMOdelObj, this.contactMOdelObj.id)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('cancel')
        ref?.click();
        alert('Contact updated Succesfully')
        this.contactForm.reset();
        this.getcontact();
      })
  }
  // OnChangeEvent(event:any){
  //  this.selectedgroup= event.target.value
  //  console.log(event.target.value);

  // }
  get firstname(){
    return this.contactForm.get('firstname')
  }
  
  get lastname(){
    return this.contactForm.get('lastname')
  }
  get group(){
    return this.contactForm.get('group')
  }
  get phonenumber(){
    return this.contactForm.get('phonemnumber')
  }
  
}



