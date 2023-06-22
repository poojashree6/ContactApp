import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { groupModel } from './contactgroup.model';
import { GroupservicesService } from '../services/groupservices.service';

@Component({
  selector: 'app-contactgroups',
  templateUrl: './contactgroups.component.html',
  styleUrls: ['./contactgroups.component.css']
})
export class ContactgroupsComponent implements OnInit {
  groupform!: FormGroup;
  groupMOdelObj: groupModel = new groupModel();
  groupData!: groupModel[];



  constructor(private formbuilder:FormBuilder,private Groupservices:GroupservicesService){}

ngOnInit(): void {
  this.groupform= this.formbuilder.group({
   name:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
  })
  this.getgroup();
}

postgroup() {
  console.log(this.groupform.value);
  this.groupMOdelObj.name = this.groupform.value.name;
  
  this.Groupservices.postgroup(this.groupMOdelObj)
    .subscribe(res => {
      console.log(res);
      alert('group Added Succesfully')
      this.groupform.reset();
      this.getgroup();
     
    })
   
}
Onclickpostcategory() {
  this.groupform.reset();
  // this.showadd = true;
  // this.showupdate = false;
}

getgroup() {
  this.Groupservices.getgroup().subscribe(res => {
    this.groupData = res;
  })
}

deletegroup(row: any) {
  this.Groupservices.deletegroup(row.id)
    .subscribe(res => {
      alert(" category Delete");
      this.getgroup();
    })
}
onEdit(row: any) {
  this.groupMOdelObj.id = row.id;
  this.groupform.controls['name'].setValue(row.name);
  
}
updategroup() {
  this.groupMOdelObj.name = this.groupform.value.name;
  this.Groupservices.updategroup(this.groupMOdelObj, this.groupMOdelObj.id)
    .subscribe(res => {
      console.log(res);
      let ref = document.getElementById('cancel')
      ref?.click();
      alert('ToDo updated Succesfully')
      this.groupform.reset();
      this.getgroup();
    })
}
get name(){
  return this.groupform.get('name')
}

}

