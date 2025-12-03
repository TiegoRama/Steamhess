import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './services/game';
import { LibraryComponent } from './components/library/library';
import { AddGame } from './components/add-game/add-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibraryComponent, AddGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('game-collection');
}
