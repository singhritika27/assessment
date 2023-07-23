import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssessmentComponent } from '../add-assessment/add-assessment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent {
  @Input() mobileView: any;
  public demo1TabIndex: any = 2;
  assessment_name: any;
  duration: any;
  display: boolean = true;

  assessments = [
    { assessment_name: 'Math', job_date: new Date(), duration: '00', question: '00' },
    { assessment_name: 'English', job_date: new Date(), duration: '10', question: '05' },
  ];
  constructor(public dialog: MatDialog, private router: Router) { 

  }

  /***  Add new assessmant  */
  addNew(mobile:any) {
    const dialogRef = this.dialog.open(AddAssessmentComponent, {
      data: { name: this.assessment_name, time: this.duration ,view:mobile},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`, JSON.parse(JSON.stringify(result)));
      this.assessments.push({
        assessment_name: result.name,
        job_date: new Date(),
        duration: result.time ? result.time : '00',
        question: '00'
      })
    });
  }

  /*** In mobile view show and hide Assessment Overview report  */
  showData() {
    document.querySelector<any>('.unstop').style.display = 'inline';
    this.display = false;
  }
  HideData() {
    document.querySelector<any>('.unstop').style.display = 'none';
    this.display = true;
  }

}
