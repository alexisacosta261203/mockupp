import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"]
})
export class ServicesComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    this.el.nativeElement.querySelectorAll(".reveal").forEach((el: Element) => obs.observe(el));
  }
  services = [
    { icon: "📷", title: "Producción Cinematográfica", desc: "Desarrollo completo de proyectos cinematográficos, desde el guión hasta la postproducción.", image: "https://images.unsplash.com/photo-1625690303837-654c9666d2d0?w=600&q=80" },
    { icon: "🎥", title: "Comerciales", desc: "Creación de contenido publicitario impactante que conecta marcas con su audiencia.", image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?w=600&q=80" },
    { icon: "🎵", title: "Proyectos Culturales", desc: "Documentales, cortometrajes y contenido audiovisual para iniciativas culturales y artísticas.", image: "https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?w=600&q=80" },
    { icon: "📅", title: "Cobertura de Eventos", desc: "Registro profesional de festivales, conciertos, conferencias y eventos especiales.", image: "https://images.unsplash.com/photo-1603126004372-e63e3b53934b?w=600&q=80" }
  ];
}
