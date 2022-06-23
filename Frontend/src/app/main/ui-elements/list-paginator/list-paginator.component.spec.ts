import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginatorComponent } from './list-paginator.component';

describe('ListPaginatorComponent', () => {
  let component: ListPaginatorComponent;
  let fixture: ComponentFixture<ListPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
