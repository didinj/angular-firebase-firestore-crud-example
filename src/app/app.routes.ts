import { Routes } from '@angular/router';
import { BoardList } from './components/board-list';
import { BoardAdd } from './components/board-add';
import { BoardEdit } from './components/board-edit';

export const routes: Routes = [
  { path: '', component: BoardList },
  { path: 'add', component: BoardAdd },
  { path: 'edit/:id', component: BoardEdit },
];
