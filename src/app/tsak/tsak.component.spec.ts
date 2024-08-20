import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsakComponent } from './tsak.component';

describe('TsakComponent', () => {
  let component: TsakComponent;
  let fixture: ComponentFixture<TsakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TsakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
