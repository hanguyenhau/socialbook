import { Component } from '@angular/core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasStar);
  }
}
