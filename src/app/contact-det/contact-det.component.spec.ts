import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetComponent } from './contact-det.component';

describe('ContactDetComponent', () => {
  let component: ContactDetComponent;
  let fixture: ComponentFixture<ContactDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
