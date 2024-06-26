import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();
  }

}
