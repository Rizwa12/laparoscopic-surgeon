import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Posts } from './pages/posts/posts';
import { Services } from './pages/services/services';
import { SuccessStories } from './pages/success-stories/success-stories';
import { Contact } from './pages/contact/contact';
export const routes: Routes = [
    {
        path: '',
    component: Home
    },
    {
    path: 'about',
    component: About
    },
     {
    path: 'posts',
    component: Posts
  },
  {
    path: 'services',
    component: Services
  },
  {
     path: 'success-stories',
     component: SuccessStories
  },
  {
  path: 'contact',
  component: Contact
}
  
];
