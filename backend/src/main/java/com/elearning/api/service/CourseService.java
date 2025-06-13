package com.elearning.api.service;

import com.elearning.api.model.Course;
import java.util.List;

public interface CourseService {
    List<Course> getAllCourses();
    Course getCourseById(Long id);
    List<Course> getCoursesByCategory(String category);
    List<Course> getCoursesByLevel(String level);
    List<Course> searchCourses(String query);
    Course createCourse(Course course);
    Course updateCourse(Long id, Course courseDetails);
    void deleteCourse(Long id);
} 