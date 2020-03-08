import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayExampleComponent } from './two-way-example.component';

describe('TwoWayExampleComponent', () => {
  let component: TwoWayExampleComponent;
  let fixture: ComponentFixture<TwoWayExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
