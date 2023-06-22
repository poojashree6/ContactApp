import { Component } from '@angular/core';
import { contactModel } from '../contacts/contact.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactservicesService } from '../services/contactservices.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  datagroup!: string;
  contactData!: contactModel[];

  constructor(private activatedRoute: ActivatedRoute, private contactservices:ContactservicesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      this.datagroup = param['get']('group');
      this.Filtergroup(this.datagroup);
    })

  }
  Filtergroup(group:string){
  this.contactservices.fetchdata(group).subscribe((data: contactModel[]) => {
  console.log(group);
  console.log(data);
  this.contactData=data;
  })
  }

}
