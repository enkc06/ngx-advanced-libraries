import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdvancedPipesComponent } from './ngx-advanced-pipes.component';

describe('NgxAdvancedPipesComponent', () => {
  let component: NgxAdvancedPipesComponent;
  let fixture: ComponentFixture<NgxAdvancedPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdvancedPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdvancedPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
