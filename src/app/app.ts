import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './services/game';
import { LibraryComponent } from './components/library/library';
import { AddGame } from './components/add-game/add-game';
import { GameDetail } from './components/game-detail/game-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibraryComponent, AddGame, GameDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Game Collection');
}
