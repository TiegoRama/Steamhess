import { Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library';
import { AddGame } from './components/add-game/add-game';
import { GameDetail } from './components/game-detail/game-detail';

export const routes: Routes = [
    { path: 'library', component: LibraryComponent },
    { path: 'add-game', component: AddGame },
    { path: 'game/:id', component: GameDetail },
    { path: '', redirectTo: 'library', pathMatch: 'full' }
];
