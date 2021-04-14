import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: GeneralService) {}

  versionSelected: number = 0;
  warrantySelected: number = 0;
  pictureSelected: number = 1;
  picturePath: string = 'assets/product_1.png';
  sectionSelected: number = 1;
  sectionText: string =
    'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.';
  specifications = [
    {
      feature: 'Dimensions',
      description: '76.8 x 43.8 x 34.7 mm (earbuds and charging case)',
    },
    {
      feature: 'USB Standard',
      description: 'USB-C',
    },
    {
      feature: 'Power supply',
      description: 'Sennheiser 7mm dynamic driver',
    },
    {
      feature: 'Frequency response (Microphone)',
      description: '100 Hz to 10 kHz',
    },
    {
      feature: 'Frequency response',
      description: '5 - 21,000 Hz',
    },
    {
      feature: 'Noise cancellation',
      description: 'Single-Mic ANC per earbud side',
    },
  ];
  todoInfo: any;
  ngOnInit(): void {
    let id = Math.floor(Math.random() * 100);
    this.service.get(id).subscribe((response) => {
      this.todoInfo = response;
    });
  }

  setSelected(index, type, path = null): any {
    if (type === 'version') {
      this.versionSelected = index;
    } else if (type === 'warranty') {
      this.warrantySelected = index;
    } else if (type === 'picture') {
      this.pictureSelected = index;
      this.picturePath = path;
    } else if (type === 'section') {
      this.sectionSelected = index;
      switch (this.sectionSelected) {
        case 1:
          this.sectionText =
            'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.';
          break;
        case 2:
          this.sectionText =
            'Features Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem hic neque, nemo laboriosam explicabo necessitatibus voluptatem! Dolores, pariatur iste et deserunt hic accusamus, quasi quam consectetur magnam dolore porro..';
          break;
        case 3:
          this.sectionText =
            "What's in the box? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti quas neque? Blanditiis aspernatur dolorem nihil atque maiores velit provident vero, molestiae iste voluptate, rem obcaecati odit quia deserunt libero.";
          break;
        default:
          this.sectionText =
            'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.';
          break;
      }
    }
  }
}
