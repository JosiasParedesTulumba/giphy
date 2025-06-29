import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = 'x8qORbCpfS1BaBo3KiMb3RRshXtsEosz';
  private apiUrl = 'https://api.giphy.com/v1/gifs';

  async searchGifs(query: string): Promise<any[]> {
    const response = await axios.get(`${this.apiUrl}/search`, {
      params: {
        api_key: this.apiKey,
        q: query,
        limit: 20
      }
    });
    return response.data.data;
  }

  async getCategories(): Promise<any[]> {
    const response = await axios.get(`${this.apiUrl}/categories`, {
      params: {
        api_key: this.apiKey
      }
    });
    return response.data.data;
  }
  constructor() { }
}
