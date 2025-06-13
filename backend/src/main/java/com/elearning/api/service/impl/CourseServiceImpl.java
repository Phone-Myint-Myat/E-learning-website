package com.elearning.api.service.impl;

import com.elearning.api.model.Course;
import com.elearning.api.repository.CourseRepository;
import com.elearning.api.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found with id: " + id));
    }

    @Override
    public List<Course> getCoursesByCategory(String category) {
        return courseRepository.findByCategory(category);
    }

    @Override
    public List<Course> getCoursesByLevel(String level) {
        return courseRepository.findByLevel(level);
    }

    @Override
    public List<Course> searchCourses(String query) {
        return courseRepository.findByTitleContainingOrDescriptionContaining(query, query);
    }

    @Override
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course updateCourse(Long id, Course courseDetails) {
        Course course = getCourseById(id);
        course.setTitle(courseDetails.getTitle());
        course.setDescription(courseDetails.getDescription());
        course.setCategory(courseDetails.getCategory());
        course.setLevel(courseDetails.getLevel());
        course.setDuration(courseDetails.getDuration());
        course.setPrice(courseDetails.getPrice());
        course.setImageUrl(courseDetails.getImageUrl());
        return courseRepository.save(course);
    }

    @Override
    public void deleteCourse(Long id) {
        Course course = getCourseById(id);
        courseRepository.delete(course);
    }
} 