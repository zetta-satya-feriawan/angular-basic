import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumbnailComponent } from './tumbnail.component';

describe('TumbnailComponent', () => {
  let component: TumbnailComponent;
  let fixture: ComponentFixture<TumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
