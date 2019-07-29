import { TestBed } from '@angular/core/testing';

import { VideogalleryService } from './videogallery.service';

describe('VideogalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideogalleryService = TestBed.get(VideogalleryService);
    expect(service).toBeTruthy();
  });
});
