import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Game[] = [
    {

      id: 1,
      name: 'The Witcher 3: Wild Hunt',
      genre: 'RPG',
      platform: 'PC',
      status: 'Terminé',
      releaseDate: new Date('2015-05-19'),
      rating: 4.5,
      coverUrl: 'https://example.com/cover.jpg',
    },
    {
      id: 2,
      name: 'Red dead Redemption 2',
      genre: 'Action',
      platform: 'PC',
      status: 'Terminé',
      releaseDate: new Date('2018-11-19'),
      rating: 5,
      coverUrl: 'https://example.com/cover.jpg',
    }
  ];
  getGames(): Game[] {
    return this.games;
  }
  addGame(game: Game): void {
    this.games.push(game);
  }
  removeGame(id: number): void {
    this.games = this.games.filter((game) => game.id !== id);
  }


}
