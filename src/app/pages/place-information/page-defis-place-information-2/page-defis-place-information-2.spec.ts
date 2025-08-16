import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisPlaceInformation2 } from './page-defis-place-information-2';

describe('PageDefisPlaceInformation2', () => {
  let component: PageDefisPlaceInformation2;
  let fixture: ComponentFixture<PageDefisPlaceInformation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisPlaceInformation2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisPlaceInformation2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
