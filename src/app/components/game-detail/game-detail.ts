import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.html',
  styleUrl: './game-detail.scss'
})
export class GameDetail implements OnInit {
  game?: Game;

  private route = inject(ActivatedRoute);
  private gameService = inject(GameService);
  private location = inject(Location);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.game = this.gameService.getGames(id);
    }
  }

  goBack() {
    this.location.back();
  }
}