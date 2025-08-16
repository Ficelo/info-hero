import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisStudioCreation1 } from './page-defis-studio-creation-1';

describe('PageDefisStudioCreation1', () => {
  let component: PageDefisStudioCreation1;
  let fixture: ComponentFixture<PageDefisStudioCreation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisStudioCreation1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisStudioCreation1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
