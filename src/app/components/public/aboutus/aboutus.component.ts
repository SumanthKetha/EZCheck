import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  aboutUs = {
    title: 'EZ Check', description: `Discover the ultimate breakfast experience at EZ,
            where culinary excellence meets a cozy and inviting atmosphere.
            Located in the heart of Linden,
            our deli is the perfect destination for sandwiches seeking a memorable morning breakfast`,
    image: '/assets/images/about-img.png'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
