import React from "react";
import myPic from "../assets/my_pic_01.jpeg"; // adjust relative path
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import { School, Work } from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import SEOHead from "../components/common/SEOHead";
import { skillCategories } from "../data/skills";
import { experience } from "../data/experience";

const About: React.FC = () => {
  const education = [
    {
      degree: "M.Tech ",
      school: "IIT Bombay",
      period: "2017 - 2019",
      details: "",
    },
    {
      degree: "B.S. in Civil Engineering",
      school: "MMMUT Gorakhpur",
      period: "2012 - 2016",
      details: "",
    },
  ];

  const certifications = [
    "AWS Certified Machine Learning - Specialty",
    "Google Professional Data Engineer",
    "TensorFlow Developer Certificate",
    "Certified Analytics Professional (CAP)",
  ];

  return (
    <>
      <SEOHead
        title="About - Ankit Kumar | Data Scientist"
        description="Learn about my background, skills, and experience in data science, machine learning, and analytics."
        keywords="data scientist, background, experience, skills, machine learning, Ankit Kumar"
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            A passionate data scientist with 3+ years of experience transforming
            complex data into actionable business insights through advanced
            analytics and machine learning.
          </Typography>
        </Box>

        {/* Personal Introduction */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Avatar
                src={myPic}
                alt="Ankit Kumar"
                sx={{
                  width: 200,
                  height: 200,
                  mx: "auto",
                  mb: 2,
                  fontSize: "3rem",
                  background: "linear-gradient(45deg, #1976d2, #dc004e)",
                }}
              >
                Ankit Kumar
              </Avatar>
              <Typography variant="h4" gutterBottom>
                Your Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Data Scientist & ML Engineer
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              I'm a passionate data scientist who believes in the power of data
              to drive meaningful change. With over 3 years of experience in the
              field, I've worked across various industries including technology,
              finance, and healthcare, helping organizations unlock the value
              hidden in their data.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              My journey began with a curiosity about patterns and numbers,
              which led me to pursue advanced degrees in data science and
              computer science. Today, I specialize in building scalable machine
              learning systems, conducting statistical analyses, and creating
              data-driven solutions that directly impact business outcomes.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              When I'm not analyzing data, you can find me contributing to
              open-source projects, writing technical blogs, or exploring the
              latest developments in AI and machine learning. I'm always excited
              to collaborate on challenging problems that push the boundaries of
              what's possible with data.
            </Typography>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Technical Skills
          </Typography>
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.category_icon;

              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <Box sx={{ color: "primary.main", mr: 2 }}>
                          {CategoryIcon && <CategoryIcon />}
                        </Box>
                        <Typography variant="h6" component="h3">
                          {category.category}
                        </Typography>
                      </Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        {category.skills.map((skill, skillIndex) => {
                          const SkillIcon = category.skill_icons[skillIndex];

                          return (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              icon={SkillIcon ? <SkillIcon /> : undefined}
                              variant="outlined"
                              size="small"
                              sx={{
                                mb: 1,
                                fontSize: "0.8rem",
                                "&:hover": {
                                  backgroundColor: "primary.light",
                                  color: "white",
                                  "& .MuiChip-icon": {
                                    color: "white",
                                  },
                                },
                                "& .MuiChip-icon": {
                                  color: "primary.main",
                                  fontSize: "1rem", // Control icon size via CSS instead
                                },
                              }}
                            />
                          );
                        })}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Professional Experience
          </Typography>
          <Timeline position="alternate">
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" sx={{ p: 1.5 }}>
                    <Work />
                  </TimelineDot>
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      gutterBottom
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {exp.period}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {exp.description}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Achievements:
                    </Typography>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {achievement}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Education
          </Typography>
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <School color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="h6">{edu.degree}</Typography>
                        <Typography variant="subtitle1" color="primary">
                          {edu.school}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">{edu.details}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Certifications
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {certifications.map((cert, index) => (
              <Chip
                key={index}
                label={cert}
                variant="outlined"
                sx={{ mb: 1, fontSize: "0.9rem", py: 2 }}
              />
            ))}
          </Stack>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            px: 4,
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(220, 0, 78, 0.1))",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 600, mx: "auto" }}
          >
            I'm always open to discussing new opportunities, collaborating on
            interesting projects, or simply chatting about the latest trends in
            data science and machine learning.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
