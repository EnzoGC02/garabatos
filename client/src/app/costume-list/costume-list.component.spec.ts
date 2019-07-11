import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeListComponent } from './costume-list.component';

describe('CostumeListComponent', () => {
  let component: CostumeListComponent;
  let fixture: ComponentFixture<CostumeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
