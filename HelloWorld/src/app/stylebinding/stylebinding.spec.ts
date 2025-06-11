import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylebinding } from './stylebinding';

describe('Stylebinding', () => {
  let component: Stylebinding;
  let fixture: ComponentFixture<Stylebinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stylebinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylebinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
