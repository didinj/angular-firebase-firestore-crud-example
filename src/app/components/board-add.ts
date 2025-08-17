import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService, Board } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './board-add.html',
  styleUrl: './board-add.scss'
})
export class BoardAdd {
  firestore = inject(FirestoreService);
  router = inject(Router);

  board: Board = { title: '', description: '', author: '' };

  async addBoard() {
    await this.firestore.addBoard(this.board);
    this.router.navigate(['/']);
  }
}
