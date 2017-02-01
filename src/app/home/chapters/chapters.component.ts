import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  public chapters = [
    // {
    //   name: "Miami University Oxford",
    //   url: "https://www.facebook.com/MUProjectCivility",
    //   imageUrl: "https://s27.postimg.org/6r22e9i1v/miami_University.jpg",
    //   members: 15,
    //   adminName: "Shar Qureshi"
    // },
    // {
    //   name: "Miami University Hamilton",
    //   url: "https://www.facebook.com/MUProjectCivility",
    //   imageUrl: "https://s27.postimg.org/t0be72o4j/miami_Hamilton.jpg",
    //   members: 22,
    //   adminName: "Shan Qureshi"
    // },
    // {
    //   name: "Miami University Middletown",
    //   url: "https://www.facebook.com/MUProjectCivility",
    //   imageUrl: "https://s27.postimg.org/96zaedaqr/miami_Middletown.jpg",
    //   members: 18,
    //   adminName: "Sandra Bullock"
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}
