import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisPlaceInformation3 } from './page-defis-place-information-3';

describe('PageDefisPlaceInformation3', () => {
  let component: PageDefisPlaceInformation3;
  let fixture: ComponentFixture<PageDefisPlaceInformation3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisPlaceInformation3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisPlaceInformation3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
