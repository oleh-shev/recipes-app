import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes-app';
  loadedFeature: 'recipe' | 'shopping-list' = 'recipe';


  onNavigate(feature: 'recipe' | 'shopping-list') {
    this.loadedFeature = feature;
  }
}
