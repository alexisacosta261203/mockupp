import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el: Element) => observer.observe(el));
  }

  features = [
    { icon: "🎬", title: "Pasión Cinematográfica", desc: "Cada proyecto es una oportunidad para contar historias que inspiran y conectan con las emociones del público." },
    { icon: "🏆", title: "Calidad Profesional", desc: "Trabajamos con los más altos estándares de producción para garantizar resultados excepcionales en cada entrega." },
    { icon: "👥", title: "Apoyo al Talento", desc: "Impulsamos a creadores emergentes, brindando espacios y oportunidades para desarrollar su potencial artístico." }
  ];
}
