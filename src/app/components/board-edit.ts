import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FirestoreService, Board } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './board-edit.html',
  styleUrl: './board-edit.scss'
})
export class BoardEdit {
  firestore = inject(FirestoreService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  board: Board | undefined;

  constructor() {
    this.route.paramMap
      .pipe(switchMap(params => this.firestore.getBoard(params.get('id')!)))
      .subscribe(board => this.board = board);
  }

  async updateBoard() {
    if (this.board?.id) {
      await this.firestore.updateBoard(this.board);
      this.router.navigate(['/']);
    }
  }
}
