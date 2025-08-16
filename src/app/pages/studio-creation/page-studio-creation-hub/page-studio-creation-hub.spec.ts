import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudioCreationHub } from './page-studio-creation-hub';

describe('PageStudioCreationHub', () => {
  let component: PageStudioCreationHub;
  let fixture: ComponentFixture<PageStudioCreationHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStudioCreationHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStudioCreationHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
