import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  listData:any=[{
    "list_name":"Machine Learning",
    "date":new Date("23-jul-2021"),
    "noOfEntites":28,
    "details":["Supervised","UnSupervised","Reinforcement"]
  },
  {
    "list_name":"test1_30_results",
    "date":new Date("26-jun-2021"),
    "noOfEntites":28,
    "details":["Infosys Limited","Delhivery Private Limited","Vodafone Idea Limited","Puma Sports Limited","Balaji Waters Private Limited"]
  },
  {
  "list_name":"Cars",
    "date":new Date("05-jan-2021"),
    "noOfEntites":28,
    "details":["BMW","Audi","Benz", "Swift","Mahindra","Toyota","Hyundai"]
  },
  {
    "list_name":"Bikes",
    "date":new Date("27-apr-2021"),
    "noOfEntites":28,
    "details":["Royal Enfield","Jawa","KTM","Honda","Ducati"]
  }
]
  constructor() { }

  getListDetails(){
    return this.listData;

  }
}
