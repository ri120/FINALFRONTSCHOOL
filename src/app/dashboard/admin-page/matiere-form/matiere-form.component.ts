import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereDto } from 'src/app/models/matiere-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { MatiereService } from 'src/app/services/serviceProject/matiere.service';

@Component({
  selector: 'app-matiere-form',
  templateUrl: './matiere-form.component.html',
  styleUrls: ['./matiere-form.component.scss']
})
export class MatiereFormComponent implements OnInit {
  matiereForm: FormGroup;
  matiereId?: number;

  constructor(
    private fb: FormBuilder,
    private matiereService: MatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matiereForm = this.fb.group({
      idMatiere: [],
      nomMatiere: ['', Validators.required],
      coeficient: ['', Validators.required],
      nombreHeure: ['', Validators.required],
      nombreExamen: ['', Validators.required],
      seancsIds: [[]],
      examenIds: [[]],
      professeurIds: [[]],
      devoirsIds: [[]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.matiereId = params['id'];
      if (this.matiereId) {
        this.matiereService.findMatiereById(this.matiereId).subscribe(matiere => {
          this.matiereForm.patchValue(matiere);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.matiereForm.valid) {
      const matiereDto: MatiereDto = this.matiereForm.value;
      this.matiereService.saveMatiere(matiereDto).subscribe(() => {
        this.router.navigate(['/matieres']);
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/matieres']);
  }
}
