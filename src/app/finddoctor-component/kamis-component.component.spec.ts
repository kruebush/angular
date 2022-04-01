import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamisComponentComponent } from './kamis-component.component';

describe('KamisComponentComponent', () => {
  let component: KamisComponentComponent;
  let fixture: ComponentFixture<KamisComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KamisComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KamisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
