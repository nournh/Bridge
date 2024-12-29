package com.example.bridgeback.Repositories;

import com.example.bridgeback.Entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository  extends JpaRepository<Course, Long> {}