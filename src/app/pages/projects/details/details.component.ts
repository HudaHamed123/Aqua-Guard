import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../../core/services/ProjectsService/projects-service.service';
import { ReuseComponent } from "../../../shared/components/reuse/reuse.component";


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, ReuseComponent],
  templateUrl: './details.component.html',
})
export class ProjectDetailsComponent implements OnInit {
title:string='اكوا جارد هي '
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectsService.getProjectById(id);
  }
}

