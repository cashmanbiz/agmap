import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchmapComponent } from './branchmap.component';

describe('BranchmapComponent', () => {
  let component: BranchmapComponent;
  let fixture: ComponentFixture<BranchmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
