import { Component, OnInit } from '@angular/core';
import { CourseService, Course } from '../../services/course.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  courses: Course[] = [];
  editCourse: Course = {
    id: 0,
    title: '',
    imageUrl: '',
    price: 0,
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }

  addCourse(): void {
    if (this.editCourse.title && this.editCourse.price > 0) {
      const courseData = { ...this.editCourse, id: 0 }; // Ensure id is included or use backend defaults
      console.log('Course Data being sent:', JSON.stringify(courseData)); // Log the request body
  
      this.courseService.addCourse(courseData).subscribe(
        (response) => {
          console.log('Course added successfully', response);
          this.loadCourses();
          this.editCourse = { id: 0, title: '', imageUrl: '', price: 0 }; // Reset the form
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Invalid input');
    }
  }
  
  updateCourse(id: number, course: Course): void {
    this.courseService.updateCourse(id, course).subscribe(
      (response) => {
        console.log('Course updated successfully', response); // Log the response
        this.loadCourses();
        this.editCourse = { id: 0, title: '', imageUrl: '', price: 0 }; // Reset the form
      },
      (error) => {
        console.error('Error updating course:', error); // Log the error
      }
    );
  }
  
  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe(() => {
      this.loadCourses();
    });
  }

  setEditCourse(course: Course): void {
    this.editCourse = { ...course }; // Copy course details to the edit form
  }

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files?.length) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editCourse.imageUrl = e.target.result; // Save base64 image data
      };
      reader.readAsDataURL(file); // Convert the image to a base64 string
    }
  }
}
