import { Component, Input, SimpleChanges } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-gif-search',
  standalone: false,
  templateUrl: './gif-search.component.html',
  styleUrl: './gif-search.component.css'
})
export class GifSearchComponent {
  @Input() selectedCategory: string = '';
  searchTerm: string = '';
  gifs: any[] = [];
  loading: boolean = false;

  constructor(private giphy: GiphyService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory'] && this.selectedCategory) {
      this.buscarGifs(this.selectedCategory);
    }
  }

  async buscarGifs(term: string) {
    if (!term) return;
    this.loading = true;
    this.gifs = await this.giphy.searchGifs(term);
    this.loading = false;
  }
}
