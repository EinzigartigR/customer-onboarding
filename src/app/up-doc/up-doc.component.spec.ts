import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDocComponent } from './up-doc.component';

describe('UpDocComponent', () => {
  let component: UpDocComponent;
  let fixture: ComponentFixture<UpDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
