import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesIndexComponent } from './languages-index.component';

describe('LanguagesIndexComponent', () => {
  let component: LanguagesIndexComponent;
  let fixture: ComponentFixture<LanguagesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
