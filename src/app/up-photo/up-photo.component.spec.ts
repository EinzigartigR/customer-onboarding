import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPhotoComponent } from './up-photo.component';

describe('UpPhotoComponent', () => {
  let component: UpPhotoComponent;
  let fixture: ComponentFixture<UpPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
