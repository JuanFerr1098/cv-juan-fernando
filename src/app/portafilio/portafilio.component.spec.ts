import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafilioComponent } from './portafilio.component';

describe('PortafilioComponent', () => {
  let component: PortafilioComponent;
  let fixture: ComponentFixture<PortafilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortafilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
