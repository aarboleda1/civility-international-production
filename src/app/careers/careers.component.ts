import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  public careerOpportunities = [
    {
      "title": "Marketing Coordinator",
      "location": "Remote",
      "description": "We're looking for a self-driven candidate that can bring ideas to the table on how to promote Civility International"
    },
    {
      "title": "Full-Stack Developer",
      "location": "Remote",
      "description": "We're looking for a full-stack JavaScript developer to join a team of three. Our stack includes Angular 2, Node/Express and Postgres and we're always open to new ideas!"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
