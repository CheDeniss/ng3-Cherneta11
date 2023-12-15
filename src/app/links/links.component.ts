import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  gitLink: string = 'https://github.com';
  linkedinLink: string = 'https://www.linkedin.com';
  twitterLink: string = 'https://twitter.com';
  certsLink: string = 'https://hffdgfd';
}

