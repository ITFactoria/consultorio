import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadClienteComponent } from './read-cliente.component';

describe('ReadClienteComponent', () => {
  let component: ReadClienteComponent;
  let fixture: ComponentFixture<ReadClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
