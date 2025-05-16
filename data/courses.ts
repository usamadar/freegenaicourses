import { Course } from "@/types/course"

const beginnerCourses: Course[] = [
  {
    id: "google-gen-ai",
    title: "Introduction to Generative AI",
    provider: "Google",
    duration: "22 minutes",
    level: "Beginner",
    category: "Foundational",
    description: "Learn the fundamentals of generative AI and how it differs from traditional machine learning methods.",
    topics: ["Generative AI Basics", "Applications", "Google AI Tools"],
    link: "https://www.cloudskillsboost.google/course_templates/536",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "microsoft-gen-ai",
    title: "Generative AI for Beginners",
    provider: "Microsoft",
    duration: "8-10 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Explore the world of generative AI, from basic concepts to building your own applications.",
    topics: ["Generative AI Concepts", "Prompt Engineering", "Application Development"],
    link: "https://techcommunity.microsoft.com/blog/azuredevcommunityblog/new-video-course-generative-ai-for-beginners/4184264",
    image: "https://learn.microsoft.com/en-us/shows/generative-ai-for-beginners/media/beg-genai-series%20title%20card.png"
  },
  {
    id: "elements-of-ai",
    title: "Elements of AI",
    provider: "University of Helsinki & MinnaLearn",
    duration: "30-40 hours",
    level: "Beginner",
    category: "Foundational",
    description: "An online course combining theory and practical exercises to introduce you to the basics of AI.",
    topics: ["AI Basics", "Machine Learning", "Neural Networks"],
    link: "https://www.elementsofai.com/",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "simplilearn-gen-ai",
    title: "Generative AI for Beginners",
    provider: "Simplilearn",
    duration: "1 hour",
    level: "Beginner",
    category: "Foundational",
    description: "Explore the exciting world of Generative AI with this beginner-friendly course.",
    topics: ["Generative AI Models", "AI Tools", "Neural Networks"],
    link: "https://www.simplilearn.com/free-generative-ai-course-skillup",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "deeplearning-ai",
    title: "Generative AI for Everyone",
    provider: "DeepLearning.AI",
    duration: "4-6 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Understand the impact of generative AI and how to use it effectively.",
    topics: ["Generative AI Concepts", "Business Applications", "AI Tools"],
    link: "https://www.coursera.org/learn/generative-ai-for-everyone",
    image: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "nvidia-gen-ai",
    title: "Generative AI Explained",
    provider: "NVIDIA",
    duration: "3-4 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Learn generative AI concepts, applications, and the challenges and opportunities in this field.",
    topics: ["Generative AI Concepts", "Applications", "Challenges"],
    link: "https://resources.nvidia.com/en-us-generative-ai-nurture-courses/dli",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "greatlearning-gen-ai",
    title: "Generative AI for Beginners",
    provider: "Great Learning",
    duration: "6-8 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Unfold the captivating domain of Generative AI with this free course.",
    topics: ["Generative Models", "Machine Learning", "Neural Networks"],
    link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/generative-ai-for-beginners",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "openai-teachers-ai",
    title: "Generative AI for Educators & Teachers Specialization",
    provider: "Vanderbilt University",
    duration: "24 hours",
    level: "Beginner",
    category: "Specialized",
    description: "A comprehensive course for educators on using ChatGPT and GPT Vision to create personalized lesson plans, educational games, and adaptive quizzes.",
    topics: [
      "Generative AI Fundamentals",
      "Quiz Generation",
      "Lesson Planning",
      "Educational Games",
    ],
    link: "https://www.coursera.org/specializations/generative-ai-for-educators-teachers",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "ibm-gen-ai",
    title: "Generative AI Fundamentals",
    provider: "IBM",
    duration: "6 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Learn the fundamentals of generative AI, including key concepts, architectures, and real-world applications with IBM's comprehensive course.",
    topics: ["Generative AI Basics", "Foundation Models", "IBM AI Tools", "Use Cases"],
    link: "https://www.coursera.org/learn/generative-ai-foundation-models-and-platforms",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ca/1f2b5191954fdb867790ef74e8cbe3/200859-Logo-image.png"
  },
  {
    id: "edx-ai-for-everyone",
    title: "AI for Everyone: Master the Basics",
    provider: "IBM",
    duration: "4-8 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Learn what Artificial Intelligence (AI) is by understanding its applications and key concepts including machine learning, deep learning and neural networks. This course is designed for anyone whether you have a technical background or not.",
    topics: [
      "AI Fundamentals",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "AI Ethics",
      "AI Applications"
    ],
    link: "https://www.edx.org/course/artificial-intelligence-for-everyone",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "coursera-gen-ai-business",
    title: "Generative AI for Business and Career Growth",
    provider: "Coursera",
    duration: "4-6 hours",
    level: "Beginner",
    category: "Foundational",
    description: "Learn how to leverage generative AI to enhance your business skills and career prospects. This course covers practical applications of AI in business contexts.",
    topics: ["Business Applications", "Career Development", "AI Tools", "Business Strategy"],
    link: "https://www.coursera.org/learn/generative-ai-business-and-career-growth",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "ucdavis-ai-ethics",
    title: "Big Data, Artificial Intelligence, and Ethics",
    provider: "University of California, Davis (Coursera)",
    duration: "9 hours",
    level: "Beginner",
    category: "Specialized",
    description: "An introductory MOOC exploring the intersection of big data, AI, and ethical issues:contentReference[oaicite:33]{index=33}. It provides context on how the digital data explosion (with 99% of information digitized) creates unprecedented opportunities for insight, but also raises serious ethical questions:contentReference[oaicite:34]{index=34}. Students learn about the promises and limitations of big data and machine learning, and why **ethical considerations** (like privacy, bias, and consent) are crucial when leveraging AI on human data. Hands-on labs include using IBM Watson’s AI services to analyze personalities from text and experimenting with Google’s Teachable Machine, illustrating both the power and the limitations of modern AI:contentReference[oaicite:35]{index=35}:contentReference[oaicite:36]{index=36}. Ultimately, the course challenges learners to think critically about the social implications of AI.:contentReference[oaicite:37]{index=37}",
    topics: ["Big data opportunities & limitations", "AI case studies (e.g. IBM Watson)", "Machine learning basics and “teachable” models", "Ethical principles in AI research", "Privacy, bias, and societal impacts"],
    link: "https://www.coursera.org/learn/big-data-ai-ethics",
    image: "https://cdn.pixabay.com/photo/2024/02/13/20/14/ai-generated-8571834_1280.jpg",
    prerequisites: []
  }
]

const intermediateCourses: Course[] = [
  {
    id: "analyticsvidhya-deepseek",
    title: "DeepSeek from Scratch",
    provider: "Analytics Vidhya",
    duration: "60 minutes",
    level: "Intermediate",
    category: "Specialized",
    description: "Learn DeepSeek's input understanding, self-attention, multi-head latent attention, routing, visualization, and RoPE with Tom Yeh. Perfect for both beginners and advanced learners.",
    topics: ["DeepSeek Architecture", "Self-Attention", "Multi-head Latent Attention", "Routing", "Visualization", "RoPE"],
    link: "https://courses.analyticsvidhya.com/courses/deepseek-from-scratch",
    image: "https://images.unsplash.com/photo-1738052380822-3dfcd949a53f?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Basic understanding of machine learning and deep learning concepts",
        level: "essential"
      },
      {
        text: "Familiarity with transformer architectures",
        level: "recommended"
      },
      {
        text: "Basic Python programming experience",
        level: "helpful"
      }
    ]
  },
  {
    id: "freecodecamp-gen-ai",
    title: "Learn Generative AI in 30 Hours",
    provider: "freeCodeCamp",
    duration: "30 hours",
    level: "Intermediate",
    category: "Comprehensive",
    description: "A structured course guiding you through generative AI concepts and practical implementations.",
    topics: ["OpenAI API", "LangChain", "Hugging Face API"],
    link: "https://www.freecodecamp.org/news/learn-generative-ai-in/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Basic programming experience (preferably Python)",
        level: "essential"
      },
      {
        text: "Some familiarity with AI/ML concepts (knowing what a model and dataset are)",
        level: "recommended"
      }
    ]
  },
  {
    id: "fast-ai",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai",
    duration: "40-50 hours",
    level: "Intermediate",
    category: "Comprehensive",
    description: "A hands-on course teaching deep learning with practical coding exercises.",
    topics: ["Deep Learning", "Computer Vision", "NLP"],
    link: "https://course.fast.ai/",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Solid Python coding fundamentals",
        level: "essential"
      },
      {
        text: "Some familiarity with basic math (understanding simple linear algebra concepts)",
        level: "recommended"
      },
      {
        text: "General understanding of what machine learning is",
        level: "helpful"
      }
    ]
  },
  {
    id: "coursera-gen-ai",
    title: "Generative AI Specialization",
    provider: "Coursera",
    duration: "48 hours",
    level: "Intermediate",
    category: "Specialized",
    description: "A series of courses covering generative AI techniques and applications.",
    topics: ["GenAI Architecture", "Model Fine-Tuning", "PyTorch", "HuggingFace Transformers"],
    link: "https://www.coursera.org/specializations/generative-ai-engineering-with-llms",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Comfortable coding in Python",
        level: "essential"
      },
      {
        text: "Familiar with basic ML workflows (training, validation, inference)",
        level: "recommended"
      },
      {
        text: "Willingness to explore frameworks like PyTorch or TensorFlow",
        level: "helpful"
      }
    ]
  },
  {
    id: "prompt-engineering-deeplearning",
    title: "ChatGPT Prompt Engineering for Developers",
    provider: "DeepLearning.AI & OpenAI",
    duration: "2-3 hours",
    level: "Intermediate",
    category: "Specialized",
    description: "Learn prompt engineering best practices from OpenAI and DeepLearning.AI experts. Master techniques for building reliable and effective prompts for development tasks.",
    topics: ["Prompt Engineering", "Iterative Prompting", "Chain of Thought", "API Integration"],
    link: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    image: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=3540&auto=format&fit=crop",
    prerequisites: [
      {
        text: "Experience with Python and making API calls",
        level: "essential"
      },
      {
        text: "Familiarity with language models (e.g. have tried ChatGPT before)",
        level: "recommended"
      },
      {
        text: "Basic understanding of prompt design concepts",
        level: "helpful"
      }
    ]
  },
  {
    id: "greatlearning-gen-ai-youtube",
    title: "Generative AI Full Course",
    provider: "Great Learning",
    duration: "8 hours",
    level: "Intermediate",
    category: "Foundational",
    description: "A comprehensive guide to Generative AI fundamentals, covering LLMs, diffusion models, GANs, and their practical applications in modern AI systems.",
    topics: ["Generative Models", "LLMs", "Diffusion Models", "GANs", "Use Cases"],
    link: "https://www.youtube.com/watch?v=hHnvo4f35GA",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60",
    format: "Video",
    prerequisites: [
      {
        text: "Some Python programming experience",
        level: "essential"
      },
      {
        text: "General understanding of ML concepts (models, datasets)",
        level: "recommended"
      },
      {
        text: "Comfortable following code demos and experimenting on your own",
        level: "helpful"
      }
    ]
  },
  {
    id: "google-ml-crash-course",
    title: "Machine Learning Crash Course",
    provider: "Google",
    duration: "15 hours",
    level: "Intermediate",
    category: "Comprehensive",
    description: "Google's fast-paced, practical introduction to machine learning. Learn fundamental ML concepts through interactive visualizations and hands-on exercises covering regression, classification, neural networks, and more.",
    topics: [
      "Linear Regression",
      "Classification",
      "Neural Networks",
      "Data Preparation",
      "ML Production",
      "ML Fairness"
    ],
    link: "https://developers.google.com/machine-learning/crash-course",
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Basic Python programming experience",
        level: "essential"
      },
      {
        text: "Basic algebra and mathematics concepts",
        level: "recommended"
      },
      {
        text: "Basic machine learning concepts",
        level: "helpful"
      }
    ]
  },
  {
    id: "deeplearning-llmops",
    title: "LLMOps: Large Language Model Operations",
    provider: "DeepLearning.AI + Google Cloud",
    duration: "1 hour 20 minutes",
    level: "Intermediate",
    category: "Systems",
    description: "A **practitioner-focused** short course on operationalizing LLMs in real-world applications:contentReference[oaicite:27]{index=27}. Developed in collaboration with Google Cloud and taught by an ML engineer at Google, it walks through the end-to-end *LLMOps pipeline*: from preparing and versioning training data, to performing supervised fine-tuning of a model, deploying the customized LLM, and monitoring it for safety:contentReference[oaicite:28]{index=28}:contentReference[oaicite:29]{index=29}. Learners get hands-on experience with tools like BigQuery (for data preprocessing), Kubeflow Pipelines (for automation), and techniques for responsible AI (safety score monitoring):contentReference[oaicite:30]{index=30}. By course end, you’ll know how to train and deploy a domain-specific LLM and manage it in production.",
    topics: ["Data preprocessing for LLM fine-tuning", "Supervised instruction tuning pipeline", "Model and data versioning (MLOps best practices)", "Automating training with pipelines (Kubeflow)", "Deploying and monitoring an LLM", "Responsible AI & safety filtering"],
    link: "https://learn.deeplearning.ai/llmops",
    image: "https://home-wordpress.deeplearning.ai/wp-content/uploads/2024/01/background-llmops.png",
    prerequisites: [ {
      text: "Basic ML workflow knowledge",
      level: "essential"
    },
    {
      text: "Python proficiency",
      level: "essential"
    }
  ]
  }
]

const advancedCourses: Course[] = [
  {
    id: "stanford-cs224n",
    title: "Natural Language Processing with Deep Learning",
    provider: "Stanford University",
    duration: "80-100 hours",
    level: "Advanced",
    category: "Specialized",
    description: "A comprehensive course covering cutting-edge deep learning approaches to NLP, including transformers and large language models.",
    topics: ["Deep Learning", "NLP", "Transformers", "Neural Networks"],
    link: "http://web.stanford.edu/class/cs224n/",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Strong Python coding skills",
        level: "essential"
      },
      {
        text: "Solid grounding in ML fundamentals and neural networks",
        level: "essential"
      },
      {
        text: "Basic math skills (linear algebra, probability) to understand the theoretical parts",
        level: "recommended"
      }
    ]
  },
  {
    id: "berkeley-cs182",
    title: "Deep Learning",
    provider: "UC Berkeley",
    duration: "120-150 hours",
    level: "Advanced",
    category: "Comprehensive",
    description: "Deep dive into neural networks, optimization, and advanced architectures with mathematical foundations.",
    topics: ["Deep Learning Theory", "Optimization", "Computer Vision", "Reinforcement Learning"],
    link: "https://berkeley-deep-learning.github.io/",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Proficiency in Python and a deep learning framework (e.g. PyTorch/TensorFlow)",
        level: "essential"
      },
      {
        text: "Strong math foundation (linear algebra, calculus, probability)",
        level: "essential"
      },
      {
        text: "Familiarity with training and tuning neural networks",
        level: "recommended"
      }
    ]
  },
  {
    id: "mit-6s965",
    title: "TinyML and Efficient Deep Learning",
    provider: "MIT",
    duration: "90-120 hours",
    level: "Advanced",
    category: "Specialized",
    description: "Learn to design and deploy efficient neural networks for resource-constrained environments.",
    topics: ["Model Optimization", "Edge AI", "Neural Architecture", "Deployment"],
    link: "https://efficientml.ai/",
    image: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Comfortable with Python and deep learning basics",
        level: "essential"
      },
      {
        text: "Understanding of model training and evaluation methods",
        level: "essential"
      },
      {
        text: "Some exposure to optimization or deploying models in resource-limited environments",
        level: "helpful"
      }
    ]
  },
  {
    id: "cornell-cs6787",
    title: "Advanced Machine Learning Systems",
    provider: "Cornell University",
    duration: "100-130 hours",
    level: "Advanced",
    category: "Systems",
    description: "Focus on the systems aspects of machine learning, including distributed training and deployment at scale.",
    topics: ["Distributed ML", "Systems Design", "Scalability", "MLOps"],
    link: "https://www.cs.cornell.edu/courses/cs6787/",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Solid background in ML and deep learning fundamentals",
        level: "essential"
      },
      {
        text: "Understanding of distributed computing, scalability, and potentially MLOps concepts",
        level: "essential"
      },
      {
        text: "Strong coding skills and willingness to deal with system-level challenges",
        level: "recommended"
      }
    ]
  },
  {
    id: "cmu-11785",
    title: "Deep Learning",
    provider: "Carnegie Mellon University",
    duration: "130-160 hours",
    level: "Advanced",
    category: "Comprehensive",
    description: "Comprehensive coverage of deep learning from theory to practice, including recent advances in the field.",
    topics: ["Deep Learning", "Advanced Architectures", "Research Methods", "Applications"],
    link: "http://deeplearning.cs.cmu.edu/",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Strong Python programming skills and hands-on ML experience",
        level: "essential"
      },
      {
        text: "In-depth math knowledge (linear algebra, calculus, probability)",
        level: "essential"
      },
      {
        text: "Familiarity with reading research papers and applying advanced techniques",
        level: "recommended"
      }
    ]
  },
  {
    id: "huggingface-nlp",
    title: "Natural Language Processing with Transformers",
    provider: "Hugging Face",
    duration: "54-72 hours",
    level: "Advanced",
    category: "Specialized",
    description: "Master modern NLP using transformers with Hugging Face's official course. Learn to fine-tune and deploy state-of-the-art language models.",
    topics: ["Transformers", "NLP", "Model Fine-tuning", "Hugging Face Hub"],
    link: "https://huggingface.co/learn/nlp-course/chapter1/1",
    image: "https://images.unsplash.com/photo-1512572525676-f9b59951929e?q=80&w=3457&auto=format&fit=crop",
    prerequisites: [
      {
        text: "Good Python coding ability",
        level: "essential"
      },
      {
        text: "Familiarity with transformer models (like BERT, GPT)",
        level: "essential"
      },
      {
        text: "Some experience with fine-tuning models and working with modern NLP libraries",
        level: "recommended"
      }
    ]
  },
  {
    id: "ibm-gen-ai-data-scientists",
    title: "Generative AI for Data Scientists Specialization",
    provider: "IBM",
    duration: "25-30 hours",
    level: "Advanced",
    category: "Specialized",
    description: "Master generative AI for data science with this comprehensive specialization. Learn to apply generative AI tools and techniques throughout the data science methodology for data augmentation, model development, and insights generation.",
    topics: [
      "Generative AI Fundamentals",
      "Prompt Engineering",
      "Data Augmentation",
      "Model Development",
      "AI Tools Integration"
    ],
    link: "https://www.coursera.org/specializations/generative-ai-for-data-scientists",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Data science or machine learning experience",
        level: "essential"
      },
      {
        text: "Programming experience with Python",
        level: "essential"
      },
      {
        text: "Understanding of AI/ML concepts",
        level: "recommended"
      }
    ]
  },
  {
    id: "huggingface-agents",
    title: "AI Agents Course",
    provider: "Hugging Face",
    duration: "18-24 hours",
    level: "Advanced",
    category: "Specialized",
    description: "Learn how to build and deploy AI agents using modern tools and frameworks. This comprehensive course covers agent architectures, tools integration, and practical applications. Each unit is designed to be completed in 1 week with 3-4 hours of work per week.",
    topics: ["AI Agents", "Agent Architectures", "Tools Integration", "Deployment"],
    link: "https://huggingface.co/learn/agents-course/unit0/introduction",
    image: "https://plus.unsplash.com/premium_photo-1725985758251-b49c6b581d17?w=800&auto=format&fit=crop&q=60",
    prerequisites: [
      {
        text: "Strong Python programming skills",
        level: "essential"
      },
      {
        text: "Understanding of machine learning and deep learning concepts",
        level: "essential"
      },
      {
        text: "Experience with modern AI frameworks and APIs",
        level: "recommended"
      }
    ]
  },
  {
    id: "fsdl-ai-product",
    title: "Full Stack Deep Learning",
    provider: "Full Stack Deep Learning (Berkeley/Open source)",
    duration: "20+ hours",
    level: "Advanced",
    category: "Systems",
    description: "An **advanced course** that teaches how to build and deploy real-world AI products, covering the “full stack” of machine learning in production:contentReference[oaicite:49]{index=49}. Originally run as an intensive bootcamp at UC Berkeley, its materials (lectures, labs) are freely available. The curriculum spans the entire ML lifecycle: defining a problem, selecting and training models, managing data and experiments, deploying models as services, and maintaining/monitoring them in production:contentReference[oaicite:50]{index=50}. It emphasizes industry best practices and toolchains (from experiment tracking to CI/CD for ML) and features instructors and guest lectures from leading AI organizations:contentReference[oaicite:51]{index=51}. By the end, you’ll understand how to take a complex model from research to a scalable, reliable application in production.",
    topics: ["Problem scoping & data pipelines", "Model training and hyperparameter tuning", "MLOps tools (experiment tracking, CI/CD)", "Deploying models (APIs, infrastructure)", "Monitoring, testing, and iterating on ML systems", "AI product case studies"],
    link: "https://fullstackdeeplearning.com/",
    image: "https://cdn.pixabay.com/photo/2024/10/01/15/54/ai-generated-9088888_1280.jpg",
    prerequisites: [
      {
        text: "Solid understanding of machine learning",
        level: "essential"
      },
      {
        text: "Experience with training deep learning models", 
        level: "essential"
      }
    ]
  }
]

export const courses: Course[] = [...beginnerCourses, ...intermediateCourses, ...advancedCourses].sort((a, b) => {
  const levelOrder = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3
  }
  return levelOrder[a.level] - levelOrder[b.level]
})
