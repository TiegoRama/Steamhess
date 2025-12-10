import { Injectable, signal } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  readonly games = signal<Game[]>([
    {

      id: 1,
      name: 'The Witcher 3: Wild Hunt',
      genre: 'RPG',
      platform: 'PC',
      status: 'Terminé',
      releaseDate: new Date('2015-05-19'),
      rating: 4.5,
      coverUrl: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f',
    },
    {
      id: 2,
      name: 'Red dead Redemption 2',
      genre: 'Action',
      platform: 'PC',
      status: 'Terminé',
      releaseDate: new Date('2018-11-19'),
      rating: 5,
      coverUrl: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_860x1148_UE_V01-860x1148-78a06414cf9e1ff9232069d4924d29fd.jpg'
    }
  ]);
  getGames(id: number): Game | undefined {
    return this.games().find(game => game.id === id);
  }
  addGame(game: Game): void {
    this.games.update(currentGames => [...currentGames, game])
  }
  removeGame(id: number): void {
    this.games.update(currentGames => currentGames.filter((game) => game.id !== id));
  }


}
