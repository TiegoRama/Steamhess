import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { GameService } from '../../services/game';
import { Game } from '../../models/game.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-library',
  imports: [RouterLink],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class LibraryComponent implements OnInit {
  games: WritableSignal<Game[]> = signal([]);

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.games;
  }

  removeGame(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce jeu ?')) {
      this.gameService.removeGame(id);
    }
  }
}
