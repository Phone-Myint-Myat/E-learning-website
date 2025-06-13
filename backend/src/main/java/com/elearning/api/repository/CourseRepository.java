package com.elearning.api.repository;

import com.elearning.api.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByCategory(String category);
    List<Course> findByLevel(String level);
    List<Course> findByTitleContainingOrDescriptionContaining(String title, String description);
} 