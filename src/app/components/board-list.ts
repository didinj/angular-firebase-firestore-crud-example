import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService, Board } from '../services/firestore.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './board-list.html',
  styleUrl: './board-list.scss'
})
export class BoardList {
  firestore = inject(FirestoreService);
  boards$: Observable<Board[]> = this.firestore.getBoards();

  deleteBoard(id: string) {
    this.firestore.deleteBoard(id);
  }
}
