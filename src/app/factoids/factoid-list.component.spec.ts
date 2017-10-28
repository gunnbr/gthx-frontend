import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoidListComponent } from './factoid-list.component';

describe('FactoidListComponent', () => {
  let component: FactoidListComponent;
  let fixture: ComponentFixture<FactoidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoidListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
