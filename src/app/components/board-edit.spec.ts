import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEdit } from './board-edit';

describe('BoardEdit', () => {
  let component: BoardEdit;
  let fixture: ComponentFixture<BoardEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
