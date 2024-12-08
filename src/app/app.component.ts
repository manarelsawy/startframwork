import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartFramworkComponent } from "./start-framwork/start-framwork.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { EndComponent } from "./end/end.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartFramworkComponent, NavbarComponent, FooterComponent, EndComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startFramwork';
}
