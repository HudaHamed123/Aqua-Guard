import { Component } from '@angular/core';
import { Feature } from '../../shared/interfaces/feature/feature';
import { CardsComponent } from "./cards/cards.component";
import { CardComponent } from "./card/card.component";
import { FeatureComponent } from "./feature/feature.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [CardsComponent, CardComponent, FeatureComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  heroImage = 'assets/pool1.jpeg';



  

}


