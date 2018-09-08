
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DocNavComponent } from './doc-nav.component';

describe('DocNavComponent', () => {
  let component: DocNavComponent;
  let fixture: ComponentFixture<DocNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [DocNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
