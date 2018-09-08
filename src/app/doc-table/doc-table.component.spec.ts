
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTableComponent } from './doc-table.component';

describe('DocTableComponent', () => {
  let component: DocTableComponent;
  let fixture: ComponentFixture<DocTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
