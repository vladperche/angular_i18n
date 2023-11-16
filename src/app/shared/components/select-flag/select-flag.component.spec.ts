import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlagComponent } from './select-flag.component';

describe('SelectFlagComponent', () => {
  let component: SelectFlagComponent;
  let fixture: ComponentFixture<SelectFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
