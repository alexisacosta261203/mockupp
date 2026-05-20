import { Component, AfterViewInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    this.el.nativeElement.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el: Element) => obs.observe(el));
  }
  form = { name: "", email: "", phone: "", subject: "", message: "" };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 4000);
    this.form = { name: "", email: "", phone: "", subject: "", message: "" };
  }
}
