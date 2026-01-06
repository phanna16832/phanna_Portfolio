import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 navItems = [
  { label: 'Home', route: '/' },       
  { label: 'About', route: '/about' }, 
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' },
];
}
