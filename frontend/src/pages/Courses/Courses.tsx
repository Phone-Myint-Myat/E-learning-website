import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const sampleCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn modern web development from scratch',
    category: 'Development',
    level: 'Beginner',
    duration: '12 weeks',
    price: '$99',
    rating: 4.8,
    students: 1234,
    image: 'https://source.unsplash.com/random/300x200?coding',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science and analytics',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '8 weeks',
    price: '$79',
    rating: 4.6,
    students: 856,
    image: 'https://source.unsplash.com/random/300x200?data',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Create amazing mobile applications',
    category: 'Development',
    level: 'Advanced',
    duration: '10 weeks',
    price: '$89',
    rating: 4.7,
    students: 945,
    image: 'https://source.unsplash.com/random/300x200?mobile',
  },
  {
    id: 4,
    title: 'Machine Learning Basics',
    description: 'Introduction to machine learning concepts',
    category: 'Data Science',
    level: 'Beginner',
    duration: '6 weeks',
    price: '$69',
    rating: 4.5,
    students: 678,
    image: 'https://source.unsplash.com/random/300x200?machine-learning',
  },
];

const categories = ['All', 'Development', 'Data Science', 'Design', 'Business'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = sampleCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Available Courses
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search Courses"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          select
          label="Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          sx={{ minWidth: '150px' }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Level"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          sx={{ minWidth: '150px' }}
        >
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Course Grid */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {filteredCourses.map((course) => (
          <Box key={course.id} sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {course.duration} • {course.level}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {course.price}
                  </Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    ⭐ {course.rating} ({course.students} students)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.category}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Courses; 