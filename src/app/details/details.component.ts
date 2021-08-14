import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  listData:any={};
  filteredData:any={};
  search:String;
  details:any;
  constructor(private details_service: DetailsService , private route: ActivatedRoute) { }

  ngOnInit() {
   this.listData = this.details_service.getListDetails();
    this.filteredData =  this.listData;
  }

  searchFilter(name){
    
    this.filteredData = this.listData.filter((item)=> (item["name"].toLowerCase()).includes(name.toLowerCase()))
    
  }

  displayDetails(list_name){
   
    this.listData.forEach(element => {
      if(element.name == list_name){
        this.details=element.details;
      }
    });
    // console.log("---------->details",this.details);
    
  }

}
