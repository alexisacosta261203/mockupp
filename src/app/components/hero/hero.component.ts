import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Trigger entry animations
    const els = document.querySelectorAll(".hero-animate");
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 280);
    });
  }
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}
