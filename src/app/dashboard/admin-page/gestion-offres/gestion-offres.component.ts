import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreDto } from 'src/app/models/offre-dto';



import { OffresService } from 'src/app/services/serviceProject/offres.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-gestion-offres',
  templateUrl: './gestion-offres.component.html',
  styleUrls: ['./gestion-offres.component.scss']
})
export class GestionOffresComponent implements OnInit {
  FormGroupart!:FormGroup
  FormGroupviewupd!:FormGroup
  offreList:OffreDto[] = [];
  submitted:boolean = false;
  modeloffre:OffreDto=new OffreDto();
  viewmodeloffre:OffreDto=new OffreDto();

  imgUrl:string | ArrayBuffer = 'assets/img/post-3.jpg'
  //| ArrayBuffer = 'assets/img/avatar.png'
  file!: File;
 

    // Chargez l  loadOffres(): void {

//debut code

selectedClass: any | null = null; 
  newClass: any = { id: 0, titre: '', nbrheuroffre: '', finoffr: ''};

  constructor(private offreservice:OffresService) { }
  ngOnInit(): void {
    this.getListOffre()
    //this.getoffre(2)
    this.FormGroupart = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'titre' : new FormControl('', Validators.required),
      'nbrheuroffre' : new FormControl('', Validators.required),
     'finoffr' : new FormControl('', Validators.required),
     'offreimg' : new FormControl('', Validators.required),
    });
    this.FormGroupviewupd = new FormGroup({
      //'idarticle' : new FormControl('', Validators.reNumber(localStorage.getItem("userId"))quired),
      'titre' : new FormControl('', Validators.required),
      'nbrheuroffre' : new FormControl('', Validators.required),
     'finoffr' : new FormControl('', Validators.required),
     'offreimg' : new FormControl('', Validators.required),
     
    });
  }
  addOffre()
  {
    if(this.FormGroupart.invalid && this.submitted ==true)
    {
      console.log(this.FormGroupart.value);
      return  ;
    }
    this.modeloffre.titre = this.FormGroupart.value.titre;
    this.modeloffre.nbrheuroffre = this.FormGroupart.value.nbrheuroffre;
    this.modeloffre.finoffr= this.FormGroupart.value.finoffr;
    this.modeloffre.offreimg= this.FormGroupart.value.offreimg;
    console.log(this.modeloffre)
    this.offreservice.saveOffre(this.modeloffre)
        .subscribe({
          next: (res) => {
            console.log('ridha',this.file)
            console.log(res)
            this.offreservice.uploadImage(res.id, this.file).subscribe(
              val =>  {} , error => { alert('oups')} , () => {
                this.submitted = true ; 
                this.getListOffre()
                console.log('hajerrrr',this.file)
              alert("offre a été ajouté!")
              
               // this.FormGroupart.reset();
             //   this.toastrService.success('Success!', 'produit a été ajouté!');
              });
          
           // this.router.navigate(['/vendeur/gerrerenchre']); 
          
            console.log(res)
            this.submitted = true;
            console.log("hhhhhhhhhhhhhhhhhhh")
          },
        });}


        ///modifier
        updateOffre()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.viewmodeloffre.titre = this.FormGroupviewupd.value.titre;
          this.viewmodeloffre.nbrheuroffre = this.FormGroupviewupd.value.nbrheuroffre;
          this.viewmodeloffre.finoffr = this.FormGroupviewupd.value.finoffr;
          console.log(this.modeloffre)
          this.offreservice.updateOffre(this.viewmodeloffre)
              .subscribe({
                next: (res) => {

                  this.offreservice.uploadImage(res.id, this.file).subscribe(
                    val =>  {} , error => { alert('oups')} , () => {
                      this.submitted = true ; 
                      console.log('hajerrrr',this.file)
                      alert("offre a été modifie!")
                     // this.FormGroupart.reset();
                   //   this.toastrService.success('Success!', 'produit a été ajouté!');
                    });
                
                  this.getListOffre()
                 // this.router.navigate(['/vendeur/gerrerenchre']); 
                  console.log(res)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}

        ///////////////////////////
     
    getListOffre()
      {
        this.offreservice.findAll().subscribe(res => {
          this.offreList = res
          console.log(res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      getbyid(id:number)
      {
        this.offreservice.findById(id).subscribe(res => {
          this.viewmodeloffre = res
          console.log(res)
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      ////last
    
      getoffre(id:number)
      {
        console.log("iiiiiiiiiiiiii",id);
        if(id!=undefined && id !=null)
        {
          this.offreservice.findById(id).subscribe(
            res=>{
              console.log(res);
              this.viewmodeloffre=res 
          },error=>{
            console.error(error) 
          },()=>{ 
          
         
            this.FormGroupviewupd.get("titre")?.setValue(this.viewmodeloffre.titre);
            this.FormGroupviewupd.get("nbrheuroffre")?.setValue(this.viewmodeloffre.nbrheuroffre);
            this.FormGroupviewupd.get("finoffr")?.setValue(this.viewmodeloffre.finoffr);
            this.FormGroupart.updateValueAndValidity()
          });
        }
        console.log("iiiiiiiiiiiiii",id);
      }
     
      ////last
 ///cpoimthode


 ///



      deleteOffre(levelId:number)
      {
        if(levelId!=undefined && levelId !=null)
        {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer entite offre!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-la!',
            cancelButtonText: 'Non, gardez-la'
          }).then((result : any) => {
            if (result.value) {
             // alert(id);
              this.offreservice.deleteOffreById(levelId)
              .subscribe(res=>{
                this.getListOffre()
              })
            Swal.fire(
              'Supprimé!',
              'Votre offre entite a été supprimée.',
              'success'
            )
         
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Annulé',
              'Votre niveau est en sécurité 🙂',
              'error'
            )
            }
          })
        }
      }
    

//fin code




 

  
  onFileInput(files: FileList | null): void {
    // alert("1" + JSON.stringify(files))
    if (files) {
      //  alert("2" + JSON.stringify(files))
      this.file = files.item(0) as File;
      if (this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }
  changeSource(event: any) {
    event.target.src = "assets/img/post-3.jpg";
  }
  
 

 

  

 
}
