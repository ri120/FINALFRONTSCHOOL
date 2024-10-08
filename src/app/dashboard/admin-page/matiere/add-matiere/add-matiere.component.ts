import { Component } from '@angular/core';

import { NiveauService } from 'src/app/services/auth/service/niveau.service';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrl: './add-matiere.component.scss'
})
export class AddMatiereComponent {
 


  //niveaux: NiveauDto[];

  constructor(private niveauService: NiveauService) {}

  ngOnInit() {
    this.loadNiveaux();
  }

  loadNiveaux() {
   /*  this.niveauService.getAllNiveaux().subscribe({
      next: (response) => {
   
        this.niveaux = response;
      },
      error: (error) => {
        console.error('Error loading niveaux:', error);
      },
    }); */
  }
  url=""

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const dropZoneElement = inputElement.closest('.dropzone-area');

    if (inputElement.files?.length) {
      var reader = new FileReader()
      reader.readAsDataURL(inputElement.files[0])
      reader.onload=(event:any)=>{
        this.url = event.target.result
      }
      this.updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const dropZoneElement = event.currentTarget as HTMLElement;
    dropZoneElement.classList.add('dropzone--over');
  }

  onDragLeave(event: DragEvent) {
    const dropZoneElement = event.currentTarget as HTMLElement;
    dropZoneElement.classList.remove('dropzone--over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dropZoneElement = event.currentTarget as HTMLElement;
    const inputElement = dropZoneElement.querySelector('input[type="file"]') as HTMLInputElement;

    if (event.dataTransfer?.files.length) {
      inputElement.files = event.dataTransfer.files;
      this.updateDropzoneFileList(dropZoneElement, event.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove('dropzone--over');
  }



  onSubmit(event: Event) {
    event.preventDefault();
    const myField = document.getElementById('upload-file') as HTMLInputElement;
    console.log(myField.files?.[0]);
  }

  private updateDropzoneFileList(dropzoneElement: Element | null, file: File) {
    const dropzoneFileMessage = dropzoneElement?.querySelector('.message');

    if (dropzoneFileMessage) {
      dropzoneFileMessage.textContent = `${file.name}, ${file.size} bytes`;
    }
  }

}
