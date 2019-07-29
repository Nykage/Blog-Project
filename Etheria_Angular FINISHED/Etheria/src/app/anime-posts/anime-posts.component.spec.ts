import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePostsComponent } from './anime-posts.component';

describe('AnimePostsComponent', () => {
  let component: AnimePostsComponent;
  let fixture: ComponentFixture<AnimePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
