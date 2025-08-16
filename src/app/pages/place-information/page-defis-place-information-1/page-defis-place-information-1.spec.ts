import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisPlaceInformation1 } from './page-defis-place-information-1';

describe('PageDefisPlaceInformation1', () => {
  let component: PageDefisPlaceInformation1;
  let fixture: ComponentFixture<PageDefisPlaceInformation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisPlaceInformation1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisPlaceInformation1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
