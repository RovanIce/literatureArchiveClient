import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Novel } from './novel';

describe('Novel', () => {
  let component: Novel;
  let fixture: ComponentFixture<Novel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Novel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Novel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
