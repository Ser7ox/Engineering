import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginazioneComponent } from './paginazione.component';

describe('PaginazioneComponent', () => {
  let component: PaginazioneComponent;
  let fixture: ComponentFixture<PaginazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
