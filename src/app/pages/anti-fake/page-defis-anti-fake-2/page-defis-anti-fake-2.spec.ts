import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisAntiFake2 } from './page-defis-anti-fake-2';

describe('PageDefisAntiFake2', () => {
  let component: PageDefisAntiFake2;
  let fixture: ComponentFixture<PageDefisAntiFake2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisAntiFake2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisAntiFake2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
