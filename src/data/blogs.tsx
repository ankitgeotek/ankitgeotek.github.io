import React from 'react';
import blog_1_pic from '../assets/blog/blog_01.png';
// Placeholder images for remaining blogs
// import blog_2_pic from '../assets/blog_02.png';
// import blog_3_pic from '../assets/blog_03.png';
// import blog_4_pic from '../assets/blog_04.png';
// import blog_5_pic from '../assets/blog_05.png';
// import blog_6_pic from '../assets/blog_06.png';

import { Article, Code, Analytics, Psychology, TrendingUp } from '@mui/icons-material';

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
  image?: string;
  blog_url?: string;
  icon?: React.ReactNode; // optional icon for category
}

// Blog category types
export type BlogCategory =
  | 'machine-learning'
  | 'data-engineering'
  | 'data-analysis'
  | 'time-series'
  | 'ai-trends'
  | 'nlp';

// Blog data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Maximal Marginal Relevance (MMR): A Beginner’s Guide',
    excerpt: 'Maximal Marginal Relevance (MMR) balances relevance and diversity in search results, ensuring informative and non-redundant outputs...',
    content: 'In the world of information retrieval, relevance and diversity are two sides of the same coin...',
    category: 'nlp',
    tags: ['RAG', 'MMR', 'Relevance', 'Diversity', 'Flexibility'],
    author: 'Ankit Kumar',
    publishDate: '2025-01-04',
    readTime: '4 min read',
    featured: true,
    image: blog_1_pic,
    blog_url: 'https://medium.com/@ankitgeotek/mastering-maximal-marginal-relevance-mmr-a-beginners-guide-0f383035a985',
    icon: <Psychology />,
  },
//   {
//     id: '2',
//     title: 'Building Scalable Data Pipelines with Apache Airflow',
//     excerpt: 'A comprehensive guide to creating robust, scalable data pipelines that can handle enterprise-level data processing.',
//     content: 'Learn how to build production-ready data pipelines using Airflow, ensuring reliability, monitoring, and scalability...',
//     category: 'data-engineering',
//     tags: ['Airflow', 'Data Pipelines', 'ETL', 'Python'],
//     author: 'Ankit Kumar',
//     publishDate: '2024-01-10',
//     readTime: '12 min read',
//     featured: true,
//     image: blog_2_pic,
//     blog_url: 'https://medium.com/@ankitgeotek/building-scalable-data-pipelines-with-apache-airflow',
//     icon: <Code />,
//   },
//   {
//     id: '3',
//     title: 'Advanced Feature Engineering Techniques for Time Series',
//     excerpt: 'Discover advanced feature engineering methods that can significantly improve your time series forecasting models.',
//     content: 'Explore cutting-edge feature engineering approaches for time series, including lag features, rolling statistics, and seasonal decomposition...',
//     category: 'time-series',
//     tags: ['Time Series', 'Feature Engineering', 'Forecasting'],
//     author: 'Ankit Kumar',
//     publishDate: '2024-01-05',
//     readTime: '10 min read',
//     featured: false,
//     image: blog_3_pic,
//     blog_url: 'https://medium.com/@ankitgeotek/advanced-feature-engineering-techniques-for-time-series',
//     icon: <TrendingUp />,
//   },
//   {
//     id: '4',
//     title: 'The Future of AI in Business Intelligence',
//     excerpt: 'How artificial intelligence is revolutionizing business intelligence and what this means for data professionals.',
//     content: 'Examining the intersection of AI and BI, with applications in predictive analytics, automated dashboards, and decision intelligence...',
//     category: 'ai-trends',
//     tags: ['AI', 'Business Intelligence', 'Future Trends'],
//     author: 'Ankit Kumar',
//     publishDate: '2023-12-28',
//     readTime: '6 min read',
//     featured: false,
//     image: blog_4_pic,
//     blog_url: 'https://medium.com/@ankitgeotek/the-future-of-ai-in-business-intelligence',
//     icon: <Article />,
//   },
//   {
//     id: '5',
//     title: 'Optimizing SQL Queries for Large Datasets',
//     excerpt: 'Performance optimization techniques for SQL queries when working with massive datasets in production environments.',
//     content: 'Learn SQL optimization strategies, including indexing, query refactoring, and partitioning to improve large dataset performance...',
//     category: 'data-analysis',
//     tags: ['SQL', 'Performance', 'Big Data', 'Database'],
//     author: 'Ankit Kumar',
//     publishDate: '2023-12-20',
//     readTime: '9 min read',
//     featured: false,
//     image: blog_5_pic,
//     blog_url: 'https://medium.com/@ankitgeotek/optimizing-sql-queries-for-large-datasets',
//     icon: <Analytics />,
//   },
//   {
//     id: '6',
//     title: 'Real-time Analytics with Apache Kafka and Stream Processing',
//     excerpt: 'Building real-time analytics systems using Kafka streams and modern stream processing frameworks.',
//     content: 'Real-time analytics architecture and implementation with Kafka Streams and related frameworks to process high-velocity data...',
//     category: 'data-engineering',
//     tags: ['Kafka', 'Stream Processing', 'Real-time', 'Analytics'],
//     author: 'Ankit Kumar',
//     publishDate: '2023-12-15',
//     readTime: '11 min read',
//     featured: true,
//     image: blog_6_pic,
//     blog_url: 'https://medium.com/@ankitgeotek/real-time-analytics-with-apache-kafka-and-stream-processing',
//     icon: <Code />,
//   },
];

// Categories with icons for filters
export const blogCategories = [
  { value: 'all', label: 'All Posts', icon: <Article /> },
  { value: 'machine-learning', label: 'Machine Learning', icon: <Psychology /> },
  { value: 'data-engineering', label: 'Data Engineering', icon: <Code /> },
  { value: 'data-analysis', label: 'Data Analysis', icon: <Analytics /> },
  { value: 'time-series', label: 'Time Series', icon: <TrendingUp /> },
  { value: 'ai-trends', label: 'AI Trends', icon: <Article /> },
  { value: 'nlp', label: 'NLP (Natural Language Processing)', icon: <Psychology /> },
];
