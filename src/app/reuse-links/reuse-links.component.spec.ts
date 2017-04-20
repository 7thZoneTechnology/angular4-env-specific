import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseLinksComponent } from './reuse-links.component';

describe('ReuseLinksComponent', () => {
  let component: ReuseLinksComponent;
  let fixture: ComponentFixture<ReuseLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
