import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  year = new Date().getFullYear();
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  socials = [
    { icon: "f", label: "Facebook", href: "#" },
    { icon: "📸", label: "Instagram", href: "#" },
    { icon: "▶", label: "YouTube", href: "#" },
    { icon: "in", label: "LinkedIn", href: "#" },
    { icon: "✉", label: "Email", href: "mailto:contacto@noriafilms.com" },
  ];
}
