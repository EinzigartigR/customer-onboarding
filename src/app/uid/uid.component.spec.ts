import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UidComponent } from './uid.component';

describe('UidComponent', () => {
  let component: UidComponent;
  let fixture: ComponentFixture<UidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
