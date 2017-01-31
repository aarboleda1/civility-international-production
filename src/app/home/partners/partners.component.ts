import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  public partners = [
    {
      logo: 'https://pbs.twimg.com/profile_images/572504917059723264/wBAcfZzn.png'
    },
    {
      logo: 'http://www.q-enterprise.com/images/img7.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
