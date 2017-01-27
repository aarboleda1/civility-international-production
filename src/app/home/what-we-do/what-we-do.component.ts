import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

    tiles = [
      {text: 'Civility', description: '', img: '../assets/images/VisionforAddie.jpg', cols: 2, rows: 2, color: 'lightblue'},
      {text: 'Diversity', description: '', cols: 2, rows: 2, color: 'lightgreen'},
      {text: 'Tolerance', description: '', cols: 2, rows: 2, color: 'lightpink'},
      {text: 'Acceptance', description: '', cols: 2, rows: 2, color: '#DDBDF1'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
