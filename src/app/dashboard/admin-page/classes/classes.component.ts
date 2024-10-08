import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassesDto } from 'src/app/models/ClassesDto';
import { Eleve } from 'src/app/models/eleve';
import { NiveauScolaire } from 'src/app/models/niveau-scolaire';
import { ClassService } from 'src/app/services/serviceProject/class.service';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{
  FormGroupart!:FormGroup
  FormGroupviewupd!:FormGroup
  classeList:ClassesDto[] = [];
  submitted:boolean = false;
  modelclass:ClassesDto=new ClassesDto();
  viewmodelclass:ClassesDto=new ClassesDto();
  niveauScolaires = Object.values(NiveauScolaire);
  selectedSchoolLevel: NiveauScolaire | null = null;
  selectedClasse:ClassesDto | null =null
  

  selectedClass: any | null = null;
  newClass: any = { id: 0, titre: '', annescolair: '' };
  ElevesClasses:Eleve[] =[];
  filteredEleves: Eleve[] = [];
  idClasse:number
  classes: ClassesDto[] = [];
  selectedOption: ClassesDto;
  eleveListClasse:Eleve[] = [];

  constructor(private classservice:ClassService, private serviceEleve:EleveService) { }
  ngOnInit(): void {
    this.getListClasse()
    this.FormGroupart = new FormGroup({
      'titre' : new FormControl('', Validators.required),
      'annescolair' : new FormControl('', Validators.required),
    });
    this.FormGroupviewupd = new FormGroup({
      'titre' : new FormControl('', Validators.required),
      'annescolair' : new FormControl('', Validators.required),
    });
  } 
  /////////ADD CLASSE ///////
  addClasse()
  {
    if(this.FormGroupart.invalid && this.submitted ==true)
    {
      console.log(this.FormGroupart.value);
      return  ;
    }
    this.modelclass.titre = this.FormGroupart.value.titre;
    this.modelclass.annescolair = this.FormGroupart.value.annescolair;
    console.log(this.modelclass)
    this.classservice.createClasses(this.modelclass)
        .subscribe({
          next: (res) => {
            alert("Classe a été ajouté!")
           // this.router.navigate(['/vendeur/gerrerenchre']); 
           this.getListClasse()
            console.log(res)
            this.submitted = true;
            console.log("hhhhhhhhhhhhhhhhhhh")
          },
        });}


        /// UPDATE CLASSE //////////
        updateClasse()
        {
          if(this.FormGroupviewupd.invalid && this.submitted ==true)
          {
            console.log(this.FormGroupviewupd.value);
            return  ;
          }
          this.viewmodelclass.titre = this.FormGroupviewupd.value.titre;
          this.viewmodelclass.annescolair = this.FormGroupviewupd.value.annescolair;
          console.log(this.modelclass)
          this.classservice.updateClasses(this.viewmodelclass)
              .subscribe({
                next: (res) => {
                  alert("classe a été modifie!")
                  this.getListClasse()
                  console.log(res)
                  this.submitted = true;
                  console.log("hhhhhhhhhhhhhhhhhhh")
                },
              });}

        /////// GET LIST CLASSES //////////
     
    getListClasse()
      {
        this.classservice.getAllClasses().subscribe(res => {
          this.classeList = res
          console.log(res)
         
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      getbyid(id:number)
      {
        this.classservice.getClassesById(id).subscribe(res => {
          this.viewmodelclass = res
          console.log(res)
        } , error => {
            console.error(error)
        } , ()=> {
    
        })
      }
      ////
    
      getclass(id:number)
      {
    
        if(id!=undefined && id !=null)
        {
          this.classservice.getClassesById(id).subscribe(
            res=>{
              console.log(res);
              this.viewmodelclass=res 
          },error=>{
            console.error(error) 
          },()=>{ 
          
         
            this.FormGroupviewupd.get("titre")?.setValue(this.viewmodelclass.titre);
            this.FormGroupviewupd.get("annescolair")?.setValue(this.viewmodelclass.annescolair);
            this.FormGroupart.updateValueAndValidity()
          });
        }
      }
      
////////// DELETE CLASSE ////////
      deleteClasee(levelId:number)
      {
        if(levelId!=undefined && levelId !=null)
        {
          Swal.fire({
            title: 'Êtes-vous sûr?',
            text: 'Vous ne pourrez pas récupérer entite classe!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Oui, supprimez-la!',
            cancelButtonText: 'Non, gardez-la'
          }).then((result : any) => {
            if (result.value) {
             // alert(id);
              this.classservice.deleteClasses(levelId)
              .subscribe(res=>{
                this.getListClasse()
              })
            Swal.fire(
              'Supprimé!',
              'Votre classe entite a été supprimée.',
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
    /////////GET ELEVE BY NIVEAU PAYEE ////
    getStudentByNiv(event: Event): void{
  
      const selectElement = event.target as HTMLSelectElement;
    
      const selectedSchoolLevel = selectElement.value as NiveauScolaire;
    console.log(selectedSchoolLevel)
    
        this.serviceEleve.findAllElevesByNiveauPaye(selectedSchoolLevel).subscribe(data => {
          // this.recNiveau=selectedSchoolLevel
          this.ElevesClasses = data;
          this.filteredEleves = this.ElevesClasses;
         
        });
      }
       AffecterElev(id:number)
      
       {
        alert('heloooo')
         this.classservice.AffecterEleve(this.idClasse,id).subscribe(res => {
           
           console.log(res)
         } , error => {
             console.error(error)
         } , ()=> {
     
         })
       }
       getId(id:number){
        this.idClasse=id
        console.log("iddd",this.idClasse)
        // this. findParentByIdEleve(id)
            }
     //////// get eleve by classe/////
    
  
      onChange(event: Event) {
        const selectElement = (event.target as HTMLSelectElement).value;
        this.selectedOption = this.classes.find(option => option.titre === selectElement);
        console.log('Selected option:', this.selectedOption);
        // Utilisez `this.selectedOption` pour accéder à tous les attributs de l'option sélectionnée
      }
      getStudentByclasse(event: Event): void{
  
        const selectElement = (event.target as HTMLSelectElement).value;
      
        const selectedOption = this.classes.find(option => option.titre === selectElement);
      console.log(selectedOption)
      
          // this.serviceEleve.findAllElevesByNiveau(selectedOption).subscribe(data => {
          //   this.ElevesClasses = data;
          //   this.filteredEleves = this.ElevesClasses;
           
          // });
        }
        getListEleveByClasse(id:number)
        {
          this.serviceEleve.findAllElevesAffecteByClasse(id).subscribe(res => {
            this.eleveListClasse = res
            console.log(res)
           
          } , error => {
              console.error(error)
          } , ()=> {
      
          })
        }
       
          
}
