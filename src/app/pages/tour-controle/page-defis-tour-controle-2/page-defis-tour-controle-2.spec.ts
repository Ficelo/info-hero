import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisTourControle2 } from './page-defis-tour-controle-2';

describe('PageDefisTourControle2', () => {
  let component: PageDefisTourControle2;
  let fixture: ComponentFixture<PageDefisTourControle2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisTourControle2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisTourControle2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
