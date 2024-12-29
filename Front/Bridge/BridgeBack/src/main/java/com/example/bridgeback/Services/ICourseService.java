package com.example.bridgeback.Services;

import com.example.bridgeback.Entities.Course;

import java.util.List;

public interface ICourseService {
    public List<Course> getAllCourses();
    public Course addCourse(Course course);
    public Course updateCourse(Long id, Course updatedCourse);
    public void deleteCourse(Long id);
}
