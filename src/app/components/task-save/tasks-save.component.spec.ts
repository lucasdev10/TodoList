import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSaveComponent } from './tasks-save.component';

describe('TasksSaveComponent', () => {
  let component: TasksSaveComponent;
  let fixture: ComponentFixture<TasksSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
