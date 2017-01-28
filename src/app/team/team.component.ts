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
      role: "Co-Founder & CEO"
    },
    {
      name: "Michael Mitrakos",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "https://s27.postimg.org/4ca6tu1sz/mitrakos.jpg",
      location: "Los Angeles",
      role: "Co-Founder & CTO"
    },
    {
      name: "Shar Qureshi",
      background: "https://s27.postimg.org/5nhy2axer/shar_cover.jpg",
      image: "https://s27.postimg.org/ejxbjzder/shar.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & CFO"
    },
    {
      name: "Jaree ",
      background: "https://s27.postimg.org/wnvqqvlpf/mitrakos_cover.jpg",
      image: "https://s27.postimg.org/44hyjl1gj/jaree.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & CMO"
    },
    {
      name: "Kofi Ansah",
      background: "https://s27.postimg.org/3t53kkaeb/shan_cover.jpg",
      image: "https://s27.postimg.org/8ewmf66jn/kofi.jpg",
      location: "Cincinnati, OH",
      role: "Co-Founder & COO"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
