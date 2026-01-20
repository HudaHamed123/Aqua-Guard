import { Routes } from '@angular/router';
export const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', loadComponent:()=>import('./pages/home/home.component').then(m=>m.HomeComponent), title:'home' },
  { path:'about', loadComponent:()=>import('./pages/about/about.component').then(m=>m.AboutComponent), title:'about' },
  { path:'contacts', loadComponent:()=>import('./pages/contacts/contacts.component').then(m=>m.ContactsComponent), title:'contacts' },
  { path:'services', loadComponent:()=>import('./pages/services/services.component').then(m=>m.ServicesComponent), title:'services' },
  { path:'projects', loadComponent:()=>import('./pages/projects/projects.component').then(m=>m.ProjectsComponent), title:'projects' },
    { path: 'projects/:id', loadComponent:()=>import('./pages/projects/details/details.component').then(m=>m.ProjectDetailsComponent) },
  { path:'**', loadComponent:()=>import('./pages/notfound/notfound.component').then(m=>m.NotfoundComponent), title:'notfound' },
];

