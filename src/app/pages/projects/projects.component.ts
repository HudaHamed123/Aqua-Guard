import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsService } from '../../core/services/ProjectsService/projects-service.service';
import { ReuseComponent } from "../../shared/components/reuse/reuse.component";


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ReuseComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  constructor(
    private router: Router,
    public projectsService: ProjectsService
  ) {}

  goToDetails(id: number) {
    this.router.navigate(['/projects', id]);
  }
}


