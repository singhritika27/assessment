import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent {

  keywords = ['UI/UX and Design', 'Web Development','Angular'];
  formControl = new FormControl(['angular']);
  announcer = inject(LiveAnnouncer);

  constructor(public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data)
  }

  /** remove skills */
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  /***  add skills */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
