import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAntiFakeHub } from './page-anti-fake-hub';

describe('PageAntiFakeHub', () => {
  let component: PageAntiFakeHub;
  let fixture: ComponentFixture<PageAntiFakeHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAntiFakeHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAntiFakeHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
