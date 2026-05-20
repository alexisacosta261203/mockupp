import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-brand",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"]
})
export class BrandComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    this.el.nativeElement.querySelectorAll(".reveal").forEach((el: Element) => obs.observe(el));
  }
  isHoveredIsotipo = false;
}
