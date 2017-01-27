import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  public chapters = [
    {
      name: "Miami University Oxford",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "../assets/images/chapters/miamiUniversity.jpg",
      members: 15,
      adminName: "Shar Qureshi"
    },
    {
      name: "Miami University Hamilton",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "../assets/images/chapters/miamiHamilton.jpg",
      members: 22,
      adminName: "Shan Qureshi"
    },
    {
      name: "Miami University Middletown",
      url: "https://www.facebook.com/MUProjectCivility",
      imageUrl: "../assets/images/chapters/miamiMiddletown.jpg",
      members: 18,
      adminName: "Sandra Bullock"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
