import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisAntiFake3 } from './page-defis-anti-fake-3';

describe('PageDefisAntiFake3', () => {
  let component: PageDefisAntiFake3;
  let fixture: ComponentFixture<PageDefisAntiFake3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisAntiFake3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisAntiFake3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
