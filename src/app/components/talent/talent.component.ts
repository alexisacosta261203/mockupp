import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-talent",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./talent.component.html",
  styleUrls: ["./talent.component.scss"]
})
export class TalentComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el: Element) => obs.observe(el));
  }
  scrollToContact() {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }
  pillars = [
    { icon: "✨", title: "Mentoría Profesional", desc: "Conectamos a nuevos talentos con profesionales experimentados de la industria para guiar su desarrollo creativo y técnico." },
    { icon: "💡", title: "Espacios Creativos", desc: "Facilitamos acceso a equipos, locaciones y recursos técnicos para que los creadores puedan materializar sus ideas." },
    { icon: "🚀", title: "Lanzamiento de Proyectos", desc: "Apoyamos en la producción y difusión de obras originales, ayudando a que alcancen festivales y plataformas relevantes." }
  ];
}
