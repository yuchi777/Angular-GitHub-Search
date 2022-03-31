import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="github">GitHub Search</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<!-- 
  <ul>
    <li><a routerLink="">Home</a></li>
    <li><a routerLink="github">GitHub</a></li>
  </ul> -->
    <router-outlet></router-outlet>
  `,
  providers:[]
})
export class AppComponent {
  

  constructor(){
    
  }

  
}
