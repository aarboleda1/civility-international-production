import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

    tiles = [
      {text: 'http://i.imgur.com/TEGB0s4.jpg', description: '', img: 'https://s27.postimg.org/a1v0rvxcv/Visionfor_Addie.jpg', cols: 2, rows: 2, color: 'lightblue'},
      {text: 'http://i.imgur.com/9lHVMHR.jpg', description: '', cols: 2, rows: 2, color: 'lightgreen'},
      {text: 'http://i.imgur.com/E6TylNX.jpg', description: '', cols: 2, rows: 2, color: 'lightpink'},
      {text: 'http://i.imgur.com/40xdQIa.jpg', description: '', cols: 2, rows: 2, color: '#DDBDF1'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
