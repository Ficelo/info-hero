import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisAntiFake1 } from './page-defis-anti-fake-1';

describe('PageDefisAntiFake1', () => {
  let component: PageDefisAntiFake1;
  let fixture: ComponentFixture<PageDefisAntiFake1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisAntiFake1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisAntiFake1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
