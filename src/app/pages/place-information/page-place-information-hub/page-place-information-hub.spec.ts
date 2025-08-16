import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlaceInformationHub } from './page-place-information-hub';

describe('PagePlaceInformationHub', () => {
  let component: PagePlaceInformationHub;
  let fixture: ComponentFixture<PagePlaceInformationHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePlaceInformationHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePlaceInformationHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
