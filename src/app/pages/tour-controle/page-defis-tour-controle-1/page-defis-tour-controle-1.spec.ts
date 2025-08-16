import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisTourControle1 } from './page-defis-tour-controle-1';

describe('PageDefisTourControle1', () => {
  let component: PageDefisTourControle1;
  let fixture: ComponentFixture<PageDefisTourControle1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisTourControle1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisTourControle1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
