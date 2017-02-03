import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team = [
    {
      name: "Shan Qureshi",
      background: "https://s27.postimg.org/3t53kkaeb/shan_cover.jpg",
      image: "https://s27.postimg.org/e4hgd823n/shan.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & CEO",
      email: "shan@civilityinternational.org"
    },
    {
      name: "Michael Mitrakos",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "http://i68.tinypic.com/6stm6o.jpg",
      location: "Los Angeles, CA",
      role: "Co-Founder & CTO",
      email: "michael@civilityinternational.org"
    },
    {
      name: "Shar Qureshi",
      background: "https://s27.postimg.org/5nhy2axer/shar_cover.jpg",
      image: "https://s27.postimg.org/ejxbjzder/shar.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & CFO",
      email: "shar@civilityinternational.org"
    },
    {
      name: "Jaree ",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "https://s27.postimg.org/44hyjl1gj/jaree.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & CMO",
      email: "jaree@civilityinternational.org"
    },
    {
      name: "Kofi Ansah",
      background: "https://s27.postimg.org/3t53kkaeb/shan_cover.jpg",
      image: "https://s27.postimg.org/8ewmf66jn/kofi.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & COO",
      email: "kofi@civilityinternational.org"
    },
    {
      name: "Rebecca Huff",
      background: "https://s27.postimg.org/5nhy2axer/shar_cover.jpg",
      image: "http://i63.tinypic.com/2viih3t.jpg",
      location: "Cincinnati, OH",
      role: "Community Manager",
      email: "rebecca@civilityinternational.org"
    },
    {
      name: "John Huynh",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "http://i68.tinypic.com/2nisn6x.jpg",
      location: "Los Angeles, CA",
      role: "Software Engineer",
      email: "john@civilityinternational.org"
    },
    {
      name: "Chris Phan",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "http://i68.tinypic.com/25ppc7n.jpg",
      location: "Los Angeles, CA",
      role: "Software Engineer",
      email: "chris@civilityinternational.org"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
