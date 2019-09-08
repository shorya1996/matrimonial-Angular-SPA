import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Matrimonial';
  peopleList:any =  [];
  imgSrc="";
  imageWidth=180;
  
  imageHeight=286;
  KnowMore = false;
  ShowDetails = false;
  PeopleDetails:any;

  ngOnInit() {
    this.peopleList=this.getPeople();
    
  }
  MoreInfo(p){
  
    this.PeopleDetails=p;
    
    this.ShowDetails=true;
    
    this.KnowMore=true;
    
    
    }


    cancel(d){
  
      this.ShowDetails=false;
      
      this.KnowMore=false;
      
      }

    match(d):void{
  
        this.ShowDetails=false;
        
        this.KnowMore=false;
        
        }

  getPeople() {
    return [{

      "Name": "Aakash",
      "Gender": "Male",

      "Religion": "Hinduism",

      "frontImageUrl":
        "assets/images/T4Front.jpg",

      "backImageUrl":
        "assets/images/T4Back.jpg",

      "caste": "Brahmin",

      "Height": "6'",

      "salary": 30000,
      "imgSrc": "",
      "interested_in" : "Female",

    },
    {

      "Name": "Jatin",
      "Gender": "Male",

      "Religion": "Hinduism",

      "frontImageUrl":
        "assets/images/T4Front.jpg",

      "backImageUrl":
        "assets/images/T4Back.jpg",

      "caste": "Shokeen",

      "Height": "6'1",

      "salary": 40000,
      "imgSrc": "",
      "interested_in" : "Female",

    },

    {

      "Name": "Honey",
      "Gender": "Male",

      "Religion": "Sikhism",

      "frontImageUrl":
        "assets/images/T3Front.jpg",

      "backImageUrl":
        "assets/images/T3Back.jpg",

      "caste": "Punjabi",

      "Height": "5'",

      "salary": 20000,
      "imgSrc": "",
      "interested_in" : "Female",

    }

    ]
  }

}
