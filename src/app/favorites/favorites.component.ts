import { Component, OnInit } from '@angular/core'
import { GifHubService } from '../gif-hub.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = []
  constructor(private yoyoyo: GifHubService) {}

  ngOnInit(): void {
    this.getAndSetFavorites()
  }

  getAndSetFavorites = () => {
    this.favorites = this.yoyoyo.getFavorites()
  }
}
