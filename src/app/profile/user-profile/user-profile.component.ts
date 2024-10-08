import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/appModules/mat.module';
import { AuthService } from 'src/app/services/auth/service/auth.service';
import { Addprof } from 'src/app/models/addprof';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, MatModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit{
  usercon:any
iduser:number
  constructor(private authsev:AuthService){}
  ngOnInit(): void {
    this.getrecupid()
  }

  getrecupid() {
    this.authsev.getuserconectedById().subscribe(
      res => {
        //this.listabsencebyeleve = res
        console.log("ghaithhhhhh",res)
       this.iduser=res
       this.getprof(this.iduser) 
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }


  updateuser()
  {
    console.log("khouloud",this.usercon)
    this.authsev.updateuser(this.usercon)
        .subscribe({
          next: (res) => {
            alert("eleve à étè ajouté!")
            console.log(res)
          
          },
        });}
  getprof(id:number) {
    this.authsev.getmyaccountusryId(id).subscribe(
      res => {
        //this.listabsencebyeleve = res
        console.log("ghaithhhhhh",res)
       this.usercon=res
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }
  geteleve(id:number) {
    this.authsev.finduserbyid(id).subscribe(
      res => {
        //this.listabsencebyeleve = res
        console.log("ghaithhhhhh",res)
       this.usercon=res
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }
  countries: string[] = [
    'India',
    'America',
    'China',
    'Arab',
    'Dubai',
    'Japan',
    'Nepal',
    'England',
    'Canada',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];



  
  states: string[] = [
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

}
