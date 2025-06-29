import { Component, EventEmitter, Output } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-category-bar',
  standalone: false,
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {
  categories: any[] = [];
  selected = '';

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private giphy: GiphyService) { }

  async ngOnInit() {
    this.categories = await this.giphy.getCategories();
  }

  selectCategory(cat: any) {
    this.selected = cat.name;
    this.categorySelected.emit(cat.name);
  }
}
