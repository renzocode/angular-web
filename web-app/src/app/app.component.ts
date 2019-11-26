import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Windstorm', 'Bombasto'];
}
