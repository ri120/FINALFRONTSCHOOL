import { Component, OnInit } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';


interface CustomJwtPayload extends JwtPayload {
  fullname: string;
}
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent implements OnInit {
  role:string
  fullname:string
  ngOnInit(): void {
    this.role=localStorage.getItem('role')

    const token = localStorage.getItem('accessToken');


          
          
    const decodedToken = jwtDecode<CustomJwtPayload>(token);
    this.fullname =decodedToken.fullname;
  }
  

}
