import { Project } from '../types';
import {Home} from '@mui/icons-material';
import mrs_image from '../assets/project/erasebg-transformed.webp'
import real_estate_image from '../assets/project/Real-Estate-Agency.jpg'
import spam_classifier_image from '../assets/project/spam classifier.webp'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// import {
//   Analytics,
//   Code,
//   TrendingUp,
//   Launch,
//   GitHub,
// } from '@mui/icons-material';
export const projectsData: Project[] = [
  // {
  //   id: '1',
  //   title: 'Customer Churn Prediction',
  //   description: 'Machine learning model to predict customer churn with ensemble methods achieving 94% accuracy.',
  //   longDescription: 'Built a comprehensive customer churn prediction system using XGBoost and Random Forest algorithms. The model analyzes customer behavior patterns, transaction history, and engagement metrics to identify at-risk customers. Implemented feature engineering techniques and hyperparameter optimization to achieve optimal performance.',
  //   technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  //   tech: ['Python', 'XGBoost', 'Pandas'], // ✅ short tech for home page
  //   category: 'machine-learning',
  //   image: '/images/churn-prediction.jpg',
  //   githubUrl: 'https://github.com/yourusername/churn-prediction',
  //   liveUrl: 'https://churn-prediction-demo.herokuapp.com',
  //   demoUrl: 'https://churn-prediction-demo.herokuapp.com',
  //   featured: false,
  //   completed: true,
  //   startDate: '2023-01-15',
  //   endDate: '2023-03-20',
  //   metrics: [
  //     { name: 'Accuracy', value: '94%', description: 'Overall model accuracy' },
  //     { name: 'Precision', value: '92%', description: 'Precision for churn prediction' },
  //     { name: 'Recall', value: '89%', description: 'Recall for identifying churners' },
  //     { name: 'ROC-AUC', value: '0.96', description: 'Area under ROC curve' },
  //   ],
  //   challenges: [
  //     'Handling imbalanced dataset with only 12% churn rate',
  //     'Feature selection from 50+ customer attributes',
  //     'Real-time prediction requirements',
  //   ],
  //   learnings: [
  //     'Advanced ensemble methods for imbalanced data',
  //     'Feature importance analysis techniques',
  //     'Model deployment with Flask API',
  //   ],
  //   tags: ['Machine Learning', 'Classification', 'Business Analytics', 'Customer Retention'],
  //   icon: <TrendingUp />,
  // },
  {
    id: '2',
    title: 'Multi-Agent Real Estate Chatbot',
    description: 'AI-powered chatbot with specialized agents for property issue detection and tenancy law guidance using vision and text models.',
    longDescription: 'Built a production-ready multi-agent system using LangGraph orchestration with two specialized AI agents: a Vision Agent (Llama 4 Scout) for analyzing property images and detecting issues like water damage, cracks, and mold, and a FAQ Agent (Llama 3.3 70B) for answering tenancy law questions with location-specific guidance. Features intelligent routing, comprehensive edge case handling, and both web and CLI interfaces.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Groq API', 'Streamlit', 'Pydantic', 'Llama 4', 'Llama 3.3', 'Pytest'],
    tech: ['Python', 'LangGraph', 'Streamlit'], // ✅ short tech
    category: 'nlp',
    image: real_estate_image,
    githubUrl: 'https://github.com/ankitgeotek/Multi-Agentic-Real-Estate-Chatbot.git',
    liveUrl: 'https://mlwithankit-real-estate-agent.streamlit.app/',
    featured: true,
    completed: true,
    startDate: '2025-10-01',
    endDate: '2025-10-03',
    metrics: [
      { name: 'Agents', value: '2', description: 'Specialized AI agents with intelligent routing' },
      { name: 'Response Time', value: '3-5s', description: 'Average query processing time' },
      { name: 'Test Coverage', value: '90%', description: 'Code coverage with edge case handling' },
    ],
    tags: ['Multi-Agent', 'Computer Vision', 'NLP', 'LangGraph', 'Property Tech', 'LegalTech'],
    icon: <Home />, // or <SmartHome /> or <Assistant />
  },
  {
  id: '3',
  title: 'Movie Recommender System',
  description: 'Content-based movie recommendation system using cosine similarity to suggest personalized movies based on user preferences.',
  longDescription: 'Built an intelligent movie recommendation engine using content-based filtering with cosine similarity algorithms. The system analyzes movie metadata including genres, cast, crew, and keywords to provide accurate recommendations. Integrated with TMDB API for real-time movie posters and information, deployed using Streamlit for an interactive user experience.',
  technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'TMDB API', 'Pickle'],
  tech: ['Python', 'Streamlit', 'Scikit-learn'], // ✅ short tech
  category: 'recommendation-systems',
  image: mrs_image,
  githubUrl: 'https://github.com/ankitgeotek/Movies_reccomender.git',
  liveUrl: 'https://ankitkumar.streamlit.app/',
  featured: true,
  completed: true,
  startDate: '2023-05-01',
  endDate: '2023-06-15',
  metrics: [
    { name: 'Movies Dataset', value: '5000+', description: 'Comprehensive movie database processed' },
    { name: 'Recommendation Speed', value: '<1s', description: 'Real-time recommendations generation' },
    { name: 'Similarity Accuracy', value: '85%', description: 'Content-based matching precision' },
  ],
  tags: ['Machine Learning', 'Content Filtering', 'Recommendation System', 'Data Science'],
  icon: <OndemandVideoIcon />,
  },
  {
    id: '4',
    title: 'Email/SMS Spam Classifier',
    description: 'A Streamlit web app that classifies text messages as spam or not spam using NLP preprocessing and machine learning.',
    longDescription: 'Developed an interactive web application using Streamlit to detect spam messages in real-time. The project implements complete NLP preprocessing — including tokenization, stopword removal, and stemming — and uses a TF-IDF vectorizer with a Multinomial Naive Bayes model trained on labeled datasets. The app offers instant predictions with a simple, user-friendly interface.',
    technologies: ['Python', 'Streamlit', 'NLTK', 'scikit-learn', 'Pickle'],
    tech: ['Python', 'Streamlit', 'NLTK'], // ✅ short tech
    category: 'nlp',
    image: spam_classifier_image,
    githubUrl: 'https://github.com/yourusername/spam-classifier',
    featured: true,
    completed: true,
    startDate: '2023-04-10',
    endDate: '2023-04-25',
    liveUrl: 'https://spam-classification.streamlit.app',
    metrics: [
      { name: 'Accuracy', value: '97.8%', description: 'Spam detection accuracy on test data' },
      { name: 'Latency', value: '<1s', description: 'Average prediction time' },
      { name: 'Dataset Size', value: '5K+', description: 'Emails and SMS messages used for training' },
    ],
    tags: ['NLP', 'Spam Detection', 'Streamlit App', 'Text Classification'],
    icon: <MarkEmailReadIcon />,
  }
,
  // {
  //   id: '5',
  //   title: 'Computer Vision Image Classifier',
  //   description: 'Deep learning model for image classification with transfer learning and custom architecture.',
  //   longDescription: 'Developed a robust image classification system using convolutional neural networks. Implemented transfer learning with pre-trained models and fine-tuned for specific use cases.',
  //   technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'PIL', 'NumPy'],
  //   tech: ['Python', 'TensorFlow', 'Keras'], // ✅ short tech
  //   category: 'computer-vision',
  //   image: '/images/image-classifier.jpg',
  //   githubUrl: 'https://github.com/yourusername/image-classifier',
  //   featured: false,
  //   completed: true,
  //   startDate: '2023-11-01',
  //   endDate: '2023-12-15',
  //   metrics: [
  //     { name: 'Top-1 Accuracy', value: '96.8%', description: 'Single prediction accuracy' },
  //     { name: 'Top-5 Accuracy', value: '99.1%', description: 'Top-5 predictions accuracy' },
  //     { name: 'Training Time', value: '2 hours', description: 'Model training duration' },
  //   ],
  //   tags: ['Computer Vision', 'CNN', 'Transfer Learning', 'Image Classification'],
  //   icon: <Image />,
  // },
  // {
  //   id: '6',
  //   title: 'Recommendation Engine',
  //   description: 'Collaborative filtering recommendation system for e-commerce platform.',
  //   longDescription: 'Built a scalable recommendation engine using matrix factorization and deep learning approaches. The system provides personalized product recommendations based on user behavior and preferences.',
  //   technologies: ['Python', 'Surprise', 'TensorFlow', 'Apache Spark', 'MongoDB', 'Flask'],
  //   tech: ['Python', 'Spark', 'Flask'], // ✅ short tech
  //   category: 'recommendation-systems',
  //   image: '/images/recommendation-engine.jpg',
  //   githubUrl: 'https://github.com/yourusername/recommendation-engine',
  //   liveUrl: 'https://rec-engine-demo.herokuapp.com',
  //   featured: false,
  //   completed: true,
  //   startDate: '2024-01-01',
  //   endDate: '2024-02-28',
  //   metrics: [
  //     { name: 'Click-through Rate', value: '+23%', description: 'Improvement in CTR' },
  //     { name: 'User Engagement', value: '+15%', description: 'Increase in user engagement' },
  //     { name: 'Revenue Impact', value: '+18%', description: 'Revenue increase from recommendations' },
  //   ],
  //   tags: ['Recommendation Systems', 'Collaborative Filtering', 'Apache Spark', 'E-commerce'],
  //   icon: <Recommend />,
  // },
];
