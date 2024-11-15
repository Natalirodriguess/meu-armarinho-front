import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSecundariaComponent } from './pg-secundaria.component';

describe('PgSecundariaComponent', () => {
  let component: PgSecundariaComponent;
  let fixture: ComponentFixture<PgSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgSecundariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
