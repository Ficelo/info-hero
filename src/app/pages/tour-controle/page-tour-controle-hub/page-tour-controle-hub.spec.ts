import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTourControleHub } from './page-tour-controle-hub';

describe('PageTourControleHub', () => {
  let component: PageTourControleHub;
  let fixture: ComponentFixture<PageTourControleHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTourControleHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTourControleHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
