import { Component, AfterViewInit, ElementRef, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"]
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    this.el.nativeElement.querySelectorAll(".reveal").forEach((el: Element) => obs.observe(el));
  }
  activeFilter = signal("todos");
  projects = [
    { title: "Cortometraje \"Memorias\"", category: "Ficción", cat: "ficcion", image: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?w=800&q=80" },
    { title: "Comercial Institucional", category: "Publicidad", cat: "publicidad", image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=80" },
    { title: "Documental Cultural", category: "Documental", cat: "documental", image: "https://images.unsplash.com/photo-1600660792241-240f01455c6f?w=800&q=80" },
    { title: "Festival de Cine Independiente", category: "Eventos", cat: "eventos", image: "https://images.unsplash.com/photo-1688678004647-945d5aaf91c1?w=800&q=80" },
    { title: "Videoclip Musical", category: "Musical", cat: "musical", image: "https://images.unsplash.com/photo-1637250096679-c10f2751def8?w=800&q=80" },
    { title: "Serie Web Original", category: "Serie", cat: "serie", image: "https://images.unsplash.com/photo-1619099619226-f96e319e3732?w=800&q=80" }
  ];
  get filtered() {
    const f = this.activeFilter();
    return f === "todos" ? this.projects : this.projects.filter(p => p.cat === f);
  }
  setFilter(f: string) {
    this.activeFilter.set(f);
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll(".project-card.reveal:not(.visible)")
        .forEach((el: Element) => el.classList.add("visible"));
    });
  }
  filters = [
    { label: "Todos", value: "todos" },
    { label: "Ficción", value: "ficcion" },
    { label: "Documental", value: "documental" },
    { label: "Eventos", value: "eventos" }
  ];
}
