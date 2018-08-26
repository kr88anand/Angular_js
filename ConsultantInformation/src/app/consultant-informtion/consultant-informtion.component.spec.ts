import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantInformtionComponent } from './consultant-informtion.component';

describe('ConsultantInformtionComponent', () => {
  let component: ConsultantInformtionComponent;
  let fixture: ComponentFixture<ConsultantInformtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantInformtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantInformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
