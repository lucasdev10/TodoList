import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemComponent } from './editem.component';

describe('EditemComponent', () => {
  let component: EditemComponent;
  let fixture: ComponentFixture<EditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
