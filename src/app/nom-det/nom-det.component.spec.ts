import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomDetComponent } from './nom-det.component';

describe('NomDetComponent', () => {
  let component: NomDetComponent;
  let fixture: ComponentFixture<NomDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
