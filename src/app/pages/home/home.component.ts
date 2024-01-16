import { Component, OnInit } from '@angular/core';
import { Post, dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = []

  constructor() {
    this.posts = dataFake
  }

  ngOnInit(): void {
  }

}
