import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweDemoAppFeature } from './swe-demo-app-feature';

describe('SweDemoAppFeature', () => {
  let component: SweDemoAppFeature;
  let fixture: ComponentFixture<SweDemoAppFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweDemoAppFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(SweDemoAppFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
