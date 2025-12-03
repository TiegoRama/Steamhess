import { Routes } from '@angular/router';
import { LibraryComponent } from './components/library/library';
import { AddGame } from './components/add-game/add-game';

export const routes: Routes = [
    { path: 'library', component: LibraryComponent },
    { path: 'add-game', component: AddGame },
    { path: '', redirectTo: 'library', pathMatch: 'full' }
];
