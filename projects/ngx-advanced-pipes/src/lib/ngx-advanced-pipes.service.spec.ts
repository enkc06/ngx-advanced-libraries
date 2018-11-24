import { TestBed, inject } from '@angular/core/testing';

import { NgxAdvancedPipesService } from './ngx-advanced-pipes.service';

describe('NgxAdvancedPipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAdvancedPipesService]
    });
  });

  it('should be created', inject([NgxAdvancedPipesService], (service: NgxAdvancedPipesService) => {
    expect(service).toBeTruthy();
  }));
});
