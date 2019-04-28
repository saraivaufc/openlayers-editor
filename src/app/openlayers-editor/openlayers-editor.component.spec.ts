import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenlayersEditorComponent } from './openlayers-editor.component';

describe('OpenlayersEditorComponent', () => {
  let component: OpenlayersEditorComponent;
  let fixture: ComponentFixture<OpenlayersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenlayersEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenlayersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
