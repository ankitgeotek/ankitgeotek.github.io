import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Search,
  FilterList,
  Close,
  Visibility,
} from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';
import SEOHead from '../components/common/SEOHead';
import { projectsData } from '../data/projects';


const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'nlp', label: 'Natural Language Processing' },
  { value: 'computer-vision', label: 'Computer Vision' },
  { value: 'recommendation-systems', label: 'Recommendation Systems' },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFeatured = !showFeaturedOnly || project.featured;
      
      return matchesCategory && matchesSearch && matchesFeatured;
    });
  }, [selectedCategory, searchQuery, showFeaturedOnly]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <SEOHead
        title="Projects - Your Name | Data Science Portfolio"
        description="Explore my data science projects including machine learning models, analytics dashboards, and AI applications."
        keywords="data science projects, machine learning, analytics, portfolio, python"
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            A showcase of my data science and machine learning projects, demonstrating 
            practical applications of analytics and AI technologies.
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={handleCategoryChange}
                  startAdornment={<FilterList sx={{ color: 'text.secondary', mr: 1 }} />}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Tabs
                value={showFeaturedOnly ? 1 : 0}
                onChange={(_, newValue) => setShowFeaturedOnly(newValue === 1)}
                centered
              >
                <Tab label="All" />
                <Tab label="Featured" />
              </Tabs>
            </Grid>
          </Grid>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(220, 0, 78, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h6" color="primary">
                    {project.category.replace('-', ' ').toUpperCase()}
                  </Typography>
                </CardMedia>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                      {project.title}
                    </Typography>
                    {project.featured && (
                      <Chip label="Featured" size="small" color="primary" />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        variant="outlined"
                      />
                    )}
                  </Box>

                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    {project.githubUrl && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.liveUrl && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                    <IconButton size="small">
                      <Visibility />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No projects found matching your criteria.
            </Typography>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowFeaturedOnly(false);
              }}
              sx={{ mt: 2 }}
            >
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h5">{selectedProject.title}</Typography>
                  <IconButton onClick={handleCloseDialog}>
                    <Close />
                  </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body1" paragraph>
                  {selectedProject.longDescription}
                </Typography>
                
                {/* Metrics */}
                {selectedProject.metrics && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Key Metrics
                    </Typography>
                    <Grid container spacing={2}>
                      {selectedProject.metrics.map((metric, index) => (
                        <Grid item xs={4} key={index}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" color="primary">
                              {metric.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {metric.name}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}

                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Tags */}
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Tags
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedProject.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                {selectedProject.githubUrl && (
                  <Button
                    startIcon={<GitHub />}
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    View Code
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </>
  );
};

export default Projects;