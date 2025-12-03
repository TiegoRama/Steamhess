import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../../services/game';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';
@Component({
  selector: 'app-add-game',
  imports: [ReactiveFormsModule],
  templateUrl: './add-game.html',
  styleUrl: './add-game.scss',
})
export class AddGame {

  constructor(private gameService: GameService, private router: Router) { }

  gameForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    platform: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    releaseDate: new FormControl(new Date(), Validators.required),
    rating: new FormControl(''),
    coverUrl: new FormControl(''),
  });

  onSubmit(): void {
    if (this.gameForm.valid) {
      const formValue = this.gameForm.value;

      const newGame: Game = {
        id: Date.now(),
        name: formValue.name!,
        genre: formValue.genre!,
        platform: formValue.platform!,
        status: formValue.status as 'A jouer' | 'En cours' | 'Terminé',
        releaseDate: new Date(formValue.releaseDate!),
        rating: formValue.rating ? Number(formValue.rating) : undefined,
        coverUrl: formValue.coverUrl || undefined,
      };

      this.gameService.addGame(newGame);
      this.router.navigate(['/library']);
    }
  }
}
