import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardList } from './board-list';

describe('BoardList', () => {
  let component: BoardList;
  let fixture: ComponentFixture<BoardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
