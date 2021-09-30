import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  title: string = '';
  price: string = '';
  pages: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSave(): void {
    const { title, price, pages } = this;
    this.http.post('http://localhost:3001/books', { 
      title,
      price,
      pages 
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((book) => {
      this.title = '';
      this.price = '';
      this.pages = '';

      alert('Book saved successfully!')
    })
  }

}
