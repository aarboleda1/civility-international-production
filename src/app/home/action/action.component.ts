import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  tiles = [
      {text: 'Eyesight for Addie', description: '', img: 'https://s27.postimg.org/a1v0rvxcv/Visionfor_Addie.jpg', cols: 2, rows: 2, color: 'lightblue'},
      {text: 'Two', description: '', cols: 2, rows: 2, color: 'lightgreen'},
      {text: 'Three', description: '', cols: 2, rows: 2, color: 'purple'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
