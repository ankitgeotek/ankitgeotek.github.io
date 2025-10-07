import { Skill } from '../types';
import {
  Code,
  Web,
  DataObject,
  Psychology,
  Storage,
  Cloud,
  TableChart,
  BarChart,
  Insights,
  School,
  Translate,
  Api,

  GitHub,
  ViewInAr,
} from '@mui/icons-material';
import { PythonIcon,ReactLogoIcon, StreamlitLogoIcon, LangchainLogoIcon, LanggraphLogoIcon, PytorchLogoIcon, SQLLogoIcon, MilvusLogoIcon } from '../utils/CustomIcon';

import { HuggingFaceIcon } from '../utils/EmojiIcon';

export const skillCategories: Skill[] = [
  {
    category: 'Programming Languages',
    category_icon: Code,
    skills: ['Python'],
    skill_icons: [PythonIcon]
  },
  {
    category: 'Web Development',
    category_icon: Web,
    skills: ['React.js', 'Streamlit'],
    skill_icons: [ReactLogoIcon, StreamlitLogoIcon]
  },
  {
    category: 'Large Language Models (LLMs)',
    category_icon: Psychology,
    skills: ['LangChain', 'LangGraph', 'PyTorch', 'Hugging Face Transformers'],
    skill_icons: [LangchainLogoIcon, LanggraphLogoIcon, PytorchLogoIcon, HuggingFaceIcon]
  },
  {
    category: 'Database Management',
    category_icon: Storage,
    skills: ['SQL', 'Faiss', 'Milvus (Vector DB)'],
    skill_icons: [SQLLogoIcon, ViewInAr, MilvusLogoIcon]
  },
  {
    category: 'Python Libraries and Tools',
    category_icon: DataObject,
    skills: ['Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'NLTK', 'spaCy', 'RESTful API'],
    skill_icons: [TableChart, BarChart, Insights, School, Translate, Psychology, Api]
  },
  {
    category: 'Cloud & DevOps',
    category_icon: Cloud,
    skills: ['AWS (IAM, EC2, S3, Bedrock)', 'Git', 'GitHub'],
    skill_icons: [Cloud, GitHub, GitHub]
  }
];