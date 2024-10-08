import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from './../sidebar/sidebar.service'
import { AuthService } from 'src/app/services/auth/service/auth.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    role:string=''

  
    constructor(
        public sidebarservice: SidebarService
      ) { }

      getSideBarSate() {
          return this.sidebarservice.getSidebarState();
      }
  
    ngOnInit() {
        this.role = localStorage.getItem('role')
    }

}
