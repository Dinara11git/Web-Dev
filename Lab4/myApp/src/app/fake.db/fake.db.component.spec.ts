import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeDbComponent } from './fake.db.component';

describe('FakeDbComponent', () => {
  let component: FakeDbComponent;
  let fixture: ComponentFixture<FakeDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
