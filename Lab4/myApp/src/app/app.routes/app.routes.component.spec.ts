import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutesComponent } from './app.routes.component';

describe('AppRoutesComponent', () => {
  let component: AppRoutesComponent;
  let fixture: ComponentFixture<AppRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
