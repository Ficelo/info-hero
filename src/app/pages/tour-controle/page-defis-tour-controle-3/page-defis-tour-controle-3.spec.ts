import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisTourControle3 } from './page-defis-tour-controle-3';

describe('PageDefisTourControle3', () => {
  let component: PageDefisTourControle3;
  let fixture: ComponentFixture<PageDefisTourControle3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisTourControle3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisTourControle3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
