import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisStudioCreation3 } from './page-defis-studio-creation-3';

describe('PageDefisStudioCreation3', () => {
  let component: PageDefisStudioCreation3;
  let fixture: ComponentFixture<PageDefisStudioCreation3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisStudioCreation3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisStudioCreation3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
