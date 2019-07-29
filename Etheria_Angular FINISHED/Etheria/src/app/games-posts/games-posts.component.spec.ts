import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPostsComponent } from './games-posts.component';

describe('GamesPostsComponent', () => {
  let component: GamesPostsComponent;
  let fixture: ComponentFixture<GamesPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
