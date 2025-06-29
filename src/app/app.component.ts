import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-giphy';

  currentCategory: string = '';

  onCategorySelected(category: string) {
    this.currentCategory = category;
  }
}
