import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomReactComponentComponent } from './custom-react-component.component';

describe('CustomReactComponentComponent', () => {
  let component: CustomReactComponentComponent;
  let fixture: ComponentFixture<CustomReactComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomReactComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomReactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
