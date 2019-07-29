import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPostsListComponent } from './games-posts-list.component';

describe('GamesPostsListComponent', () => {
  let component: GamesPostsListComponent;
  let fixture: ComponentFixture<GamesPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
