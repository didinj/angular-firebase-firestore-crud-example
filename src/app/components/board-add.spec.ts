import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdd } from './board-add';

describe('BoardAdd', () => {
  let component: BoardAdd;
  let fixture: ComponentFixture<BoardAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
