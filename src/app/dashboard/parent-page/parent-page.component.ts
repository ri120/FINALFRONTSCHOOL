import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from 'src/app/services/snackbar/core.service';
import { AjoutEnfantComponent } from './ajout-enfant/ajout-enfant.component';
import { EleveService } from 'src/app/services/serviceProject/eleve.service';
import { Eleve } from 'src/app/models/eleve';
import { ReglementService } from 'src/app/services/serviceProject/reglement.service';
import { Listeeglement } from 'src/app/models/listeeglement';
import { AbsenceService } from 'src/app/services/serviceProject/absence.service';
import { AbsenceDto } from 'src/app/models/absence-dto';
import { Listeabsencedto } from 'src/app/models/listeabsencedto';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrl: './parent-page.component.scss'
})
export class ParentPageComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'dob',
    'education',
    'action',
  ];
  listEleve: Eleve[]=[]
  listreglement: Listeeglement[]=[]
  listabsencebyeleve:Listeabsencedto[]=[]
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
     private _regService: ReglementService,
    private _coreService: CoreService,
    private serviceEleve:EleveService,
    private serviceEleveid:AbsenceService

  ) {}

  ngOnInit(): void {
    this.getEleveByParent();
    this.getEleveByParent()
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AjoutEnfantComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
       
        }
      },
    });

    
  }

  getEleveByParent() {
    this.serviceEleve.findAllElevesByParent().subscribe(
      res => {
        this.listEleve = res
        console.log("ghaithhhhhh",res)
       
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }
  getReglementeleve(ideleve:number) {
    this._regService.ReglementByIdeleve(ideleve).subscribe(
      res => {
        this.listreglement = res
        console.log("ghaithhhhhh",res)
       
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }

  getAbsenceeleve(ideleve:number) {
    this.serviceEleveid.findAbsenceByeleveId(ideleve).subscribe(
      res => {
        this.listabsencebyeleve = res
        console.log("ghaithhhhhh",res)
       
      } , error => {
          console.error(error)
      } , ()=> {
    
      })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    // this._empService.deleteEmployee(id).subscribe({
    //   next: (res) => {
    //     this._coreService.openSnackBar('Employee deleted!', 'done');
    //     this.getEmployeeList();
    //   },
    //   error: console.log,
    // });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AjoutEnfantComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
         
        }
      },
    });
  }

}
