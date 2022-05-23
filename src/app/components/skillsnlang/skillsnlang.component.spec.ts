import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsnlangComponent } from './skillsnlang.component';

describe('SkillsnlangComponent', () => {
  let component: SkillsnlangComponent;
  let fixture: ComponentFixture<SkillsnlangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsnlangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsnlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
