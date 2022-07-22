import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguComponent } from './angu.component';

describe('AnguComponent', () => {
  let component: AnguComponent;
  let fixture: ComponentFixture<AnguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnguComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
