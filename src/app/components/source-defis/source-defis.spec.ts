import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDefis } from './source-defis';

describe('SourceDefis', () => {
  let component: SourceDefis;
  let fixture: ComponentFixture<SourceDefis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceDefis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceDefis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
