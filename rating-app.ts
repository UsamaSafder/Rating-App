import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ratting-app',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, HttpClientModule],
  templateUrl: './rating-app.html',
  styleUrl: './rating-app.css'
})
export class RattingApp {
  StarNumber = 0;
  name = '';
  message = '';
  stars = [1, 2, 3, 4, 5];

  messages: { name: string; comment: string; rating: number }[] = [];

  constructor(private http: HttpClient) {
    this.loadReviews(); 
  }

  
  submitMessage() {
    if (!this.name || !this.StarNumber) return;

    const review = {
      name: this.name,
      comment: this.message.trim(),
      rating: this.StarNumber
    };

    this.http.post('https://hmftj.com/interns/angular/api.php?action=create', review)
      .subscribe({
        next: () => {
          this.name = '';
          this.message = '';
          this.StarNumber = 0;

          const stars = document.querySelectorAll('.stars');
          stars.forEach((star) => {
            (star as HTMLElement).style.color = 'white';
          });

          this.loadReviews(); // Reload reviews after submission
        },
        error: (err) => console.error('Submit failed:', err)
      });
  }


  loadReviews() {
  this.http.get<any>('https://hmftj.com/interns/angular/api.php?action=read')
    .subscribe({
      next: (data) => {
        
        this.messages = (data.reviews || [])
          .filter((r: any) => r.name && r.comment && r.rating > 0)
          .reverse();
      },
      error: (err) => console.error('Failed to load reviews:', err)
    });
}


  // ⭐ Handle star rating UI
  rate(el: HTMLElement, star: number) {
    this.StarNumber = star;

    const stars = document.querySelectorAll('.stars');
    stars.forEach((element, index) => {
      (element as HTMLElement).style.color = index < star ? 'red' : 'white';
    });
  }
}
