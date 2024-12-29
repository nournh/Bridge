import { Component } from '@angular/core';

import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  // Add CommonModule to imports
})
export class CoursesComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe({
      next: (data) => (this.courses = data),
      error: (err) => console.error(err),
    });
  }
}
