import {
  Component,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {

  posts: Post[] = [];

  newPost = {
    title: '',
    description: '',
    image: ''
  };

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      this.loadPosts();
    }

  }

  // Load saved posts
  loadPosts(): void {

    const data = localStorage.getItem('posts');

    if (data) {
      this.posts = JSON.parse(data);
    }

  }

  // Save posts
  savePosts(): void {

    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(
      'posts',
      JSON.stringify(this.posts)
    );

  }

  // Select image
  onImageSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {

      this.newPost.image =
        reader.result as string;

    };

    reader.readAsDataURL(file);

  }

  // ADD POST
  addPost(): void {

    console.log('Add Post button clicked');

    if (!this.newPost.title.trim()) {

      alert('Please enter post title');

      return;
    }

    if (!this.newPost.description.trim()) {

      alert('Please enter post description');

      return;
    }

    const post: Post = {

      id: Date.now(),

      title: this.newPost.title,

      description: this.newPost.description,

      image: this.newPost.image,

      date: new Date().toLocaleDateString()

    };

    // Add post
    this.posts.unshift(post);

    // Save post
    this.savePosts();

    // Clear form
    this.newPost = {
      title: '',
      description: '',
      image: ''
    };

    console.log('Post added:', post);

  }

  // Delete
  deletePost(id: number): void {

    this.posts =
      this.posts.filter(x => x.id !== id);

    this.savePosts();

  }

  // Latest 5
  latestPosts(): Post[] {

    return this.posts.slice(0, 5);

  }

}