// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { GestionOffresComponent } from 'src/app/dashboard/admin-page/gestion-offres/gestion-offres.component';
// import { AuthService } from 'src/app/services/auth/service/auth.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {
//   @ViewChild('moreInfoSection') moreInfoSection!: ElementRef;
//   @ViewChild('moreAboutUs') moreAboutUs!: ElementRef;

//   username: string | null = null;
//   constructor(
//     private router: Router,
//     private offresservice: GestionOffresComponent,
//     private authService: AuthService
//   ) {}

//   ngOnInit(): void {
//     this.username = localStorage.getItem('firstname');
//    // this.findallOffres();
//   }

//   ngAfterViewInit() {
//     // Additional logic if needed after view initialization
//   }

//   navigateToLogin() {
//     this.router.navigate(['/auth/sign-in']);
//   }
//   navigateToDetails() {
//     this.router.navigate(['/apropos']);
//   }
//   navigateToRegister() {
//     this.router.navigate(['/auth/sign-up']);
//   }


//   navigateToOffers(domain: string) {
//     this.router.navigate(['/listedomaine', domain]); // Navigate to a route where all offers for the domain will be displayed
//   }

//   scrollToUs() {
//     const aboutSection = document.getElementById('about-section');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

//   scrollToSection() {
//     const contactSection = document.getElementById('contact-section');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   }

 
// }
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface OffreDto {
  id: number;
  titr: string;
  nbrheuroffre: number;
  finoffr: string;
  offreimg: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('moreInfoSection') moreInfoSection!: ElementRef;
  @ViewChild('moreAboutUs') moreAboutUs!: ElementRef;

  username: string | null = null;
  offreList: OffreDto[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('firstname');
    this.loadOffres();
  }


  loadOffres(): void {
    // Chargez les offres de manière statique ici
    this.offreList = [
      { id: 1, titr: 'Offre sportif', nbrheuroffre: 40, finoffr: '2024-12-31', offreimg: 'assets/images/sport.jpg' },
      { id: 2, titr: 'Offre robotique', nbrheuroffre: 35, finoffr: '2024-11-30', offreimg: 'assets/images/robotique.jpg' },
      { id: 3, titr: 'Offre de musique', nbrheuroffre: 40, finoffr: '2024-12-31', offreimg: 'assets/images/musique.png' },
      { id: 4, titr: 'Offre de jeuxEducatif', nbrheuroffre: 35, finoffr: '2024-11-30', offreimg: 'assets/images/jeuxEducatif.jpeg' },  
      { id: 5, titr: 'Offre de camping', nbrheuroffre: 35, finoffr: '2024-11-30', offreimg: 'assets/images/camping.jpg' },
      { id: 5, titr: 'Offre de sport', nbrheuroffre: 35, finoffr: '2024-11-30', offreimg: 'assets/images/foot.jpg' },

    
    ];
  }

 

  navigateToLogin() {
    this.router.navigate(['/auth/sign-in']);
  }

  navigateToDetails() {
    this.router.navigate(['/apropos']);
  }

  navigateToRegister() {
    this.router.navigate(['/auth/sign-up']);
  }

  navigateToOffers(domain: string) {
    this.router.navigate(['/listedomaine', domain]); // Navigate to a route where all offers for the domain will be displayed
  }

  scrollToUs() {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSection() {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
