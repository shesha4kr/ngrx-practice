import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/']);
    document.getElementById('home')?.classList.add('selected');
    document.getElementById('counter')?.classList.remove('selected');
    document.getElementById('posts')?.classList.remove('selected');
  }

  counter() {
    this.router.navigate(['/counter']);
    document.getElementById('home')?.classList.remove('selected');
    document.getElementById('counter')?.classList.add('selected');
    document.getElementById('posts')?.classList.remove('selected');
  }

  posts() {
    this.router.navigate(['/posts']);
    document.getElementById('home')?.classList.remove('selected');
    document.getElementById('counter')?.classList.remove('selected');
    document.getElementById('posts')?.classList.add('selected');
  }
}
