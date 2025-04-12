import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        DashboardComponent,
        NavigationComponent
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display statistics cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.stat-card'));
    expect(cards.length).toBe(4);
  });

  it('should display correct statistic values', () => {
    component.statistics = {
      clients: 100,
      pets: 200,
      appointments: 50,
      treatments: 75
    };
    fixture.detectChanges();
    
    const statValues = fixture.debugElement.queryAll(By.css('.stat-value'));
    expect(statValues[0].nativeElement.textContent).toContain('100');
    expect(statValues[1].nativeElement.textContent).toContain('200');
    expect(statValues[2].nativeElement.textContent).toContain('50');
    expect(statValues[3].nativeElement.textContent).toContain('75');
  });
});
