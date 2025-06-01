import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const featuredCourses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn modern web development from scratch',
    image: 'https://source.unsplash.com/random/300x200?coding',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science and analytics',
    image: 'https://source.unsplash.com/random/300x200?data',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Create amazing mobile applications',
    image: 'https://source.unsplash.com/random/300x200?mobile',
  },
];

const Home: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Welcome to E-Learning Platform
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Discover a world of knowledge with our comprehensive online courses.
            Learn at your own pace and achieve your goals.
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/courses"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2 }}
            >
              Browse Courses
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              color="inherit"
              size="large"
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured Courses Section */}
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Courses
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {featuredCourses.map((course) => (
            <Box key={course.id} sx={{ flex: '1 1 300px', minWidth: 0 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
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
                  <Typography>{course.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 