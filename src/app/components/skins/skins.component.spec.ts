import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsComponent } from './skins.component';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
