import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixuploadComponent } from './fixupload.component';

describe('FixuploadComponent', () => {
  let component: FixuploadComponent;
  let fixture: ComponentFixture<FixuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
