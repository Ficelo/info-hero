import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefisStudioCreation2 } from './page-defis-studio-creation-2';

describe('PageDefisStudioCreation2', () => {
  let component: PageDefisStudioCreation2;
  let fixture: ComponentFixture<PageDefisStudioCreation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDefisStudioCreation2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDefisStudioCreation2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
