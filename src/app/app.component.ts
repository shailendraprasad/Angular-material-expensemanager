import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  mat-list-item {
    cursor: pointer;
    text-color: white;
  }

  .mat-sidenav-container {
    min-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100vh;
}
.mat-sidenav {
    min-width: 220px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    height: 100vh;
}
  `]
})
export class AppComponent {
  themeClassName: string = 'light-theme'

  @ViewChild('sidenav') sideNav: any;

  themeChanged(eventData: boolean) {
    if (!!eventData)
      this.themeClassName = 'dark-theme';
    else
      this.themeClassName = 'light-theme';

    console.log(this.themeClassName)
  }

  sideNavToggle(eventData: string) {
    if (eventData == "logout") {
      this.sideNav.close();
    }
    else
      this.sideNav.toggle();
  }
}
