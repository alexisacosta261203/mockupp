import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { BrandComponent } from './components/brand/brand.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TalentComponent } from './components/talent/talent.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    BrandComponent,
    ServicesComponent,
    PortfolioComponent,
    TalentComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-root">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-brand></app-brand>
        <app-services></app-services>
        <app-portfolio></app-portfolio>
        <app-talent></app-talent>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-root { min-height: 100vh; background: #0A0A0D; }
  `]
})
export class AppComponent {}
