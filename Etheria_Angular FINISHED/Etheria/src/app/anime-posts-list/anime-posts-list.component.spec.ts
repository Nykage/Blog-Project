import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePostsListComponent } from './anime-posts-list.component';

describe('AnimePostsListComponent', () => {
  let component: AnimePostsListComponent;
  let fixture: ComponentFixture<AnimePostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
