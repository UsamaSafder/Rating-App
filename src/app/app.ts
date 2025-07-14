import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingApp } from './rating-app/rating-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RatingApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-angular-app';
}
