import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { collection, doc, addDoc, updateDoc, deleteDoc, Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Board {
  id?: string;      // Firestore document ID
  title: string;
  description: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) { }

  // Get all boards (Realtime stream)
  getBoards(): Observable<Board[]> {
    const boardsRef = collection(this.firestore, 'boards');
    return collectionData(boardsRef, { idField: 'id' }) as Observable<Board[]>;
  }

  // Get a single board by ID
  getBoard(id: string): Observable<Board> {
    const boardDocRef = doc(this.firestore, `boards/${id}`);
    return docData(boardDocRef, { idField: 'id' }) as Observable<Board>;
  }

  // Add a new board
  addBoard(board: Board) {
    const boardsRef = collection(this.firestore, 'boards');
    return addDoc(boardsRef, board);
  }

  // Update an existing board
  updateBoard(board: Board) {
    const boardDocRef = doc(this.firestore, `boards/${board.id}`);
    return updateDoc(boardDocRef, {
      title: board.title,
      description: board.description,
      author: board.author
    });
  }

  // Delete a board
  deleteBoard(id: string) {
    const boardDocRef = doc(this.firestore, `boards/${id}`);
    return deleteDoc(boardDocRef);
  }
}
