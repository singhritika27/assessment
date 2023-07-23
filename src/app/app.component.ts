import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unstopAssessment';
  events: any = [];
  opened: boolean = true;
  @ViewChild('sidenav') sidenav?: MatSidenav;

  mobileView: boolean = false;

  /***  In mobile view, toggle menu */
  toggleClick() {
    this.sidenav?.toggle();
    document.querySelector<any>('.sideNav').style.display = 'inline'
  }

  constructor() { }

  ngOnDestroy(): void { }

  public isMobileLayout = false;
  ngOnInit() {
    this.mobileView = false
  }

  /**  switch to mobile view */
  mobile1() {
    this.mobileView = true;
    this.opened = false;
  }

  /** switch to desktop view */
  desktop() {
    this.mobileView = false;
    this.opened = true;
  }
}
