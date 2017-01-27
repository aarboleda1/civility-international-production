import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog)
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <md-input-container>
      <input md-input placeholder="Name" />
      <input md-input placeholder="Email" />
      <input md-input placeholder="Password" />
    </md-input-container>
  `
})
export class DialogOverviewExampleDialog implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}