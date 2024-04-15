import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchEditComponent } from './patch-edit.component';

describe('PatchEditComponent', () => {
  let component: PatchEditComponent;
  let fixture: ComponentFixture<PatchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatchEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
