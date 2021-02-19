import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css'],
})
export class GifCardComponent implements OnInit {
  @Input() gifRef: any
  @Output() favoriteEvent = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {}

  emitFavoriteEvent = (gif: any): void => {
    this.favoriteEvent.emit(gif)
  }
}
