import { Course } from "@/types/course"

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
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1512572525676-f9b59951929e?q=80&w=3457&auto=format&fit=crop"
  }
]

const existingCourses: Course[] = [
  {
    id: "google-gen-ai",
    title: "Introduction to Generative AI",
    provider: "Google Cloud",
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
    id: "freecodecamp-gen-ai",
    title: "Learn Generative AI in 30 Hours",
    provider: "freeCodeCamp",
    duration: "30 hours",
    level: "Intermediate",
    category: "Comprehensive",
    description: "A structured course guiding you through generative AI concepts and practical implementations.",
    topics: ["OpenAI API", "LangChain", "Hugging Face API"],
    link: "https://www.freecodecamp.org/news/learn-generative-ai-in/",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60"
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
    id: "fast-ai",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai",
    duration: "40-50 hours",
    level: "Intermediate",
    category: "Comprehensive",
    description: "A hands-on course teaching deep learning with practical coding exercises.",
    topics: ["Deep Learning", "Computer Vision", "NLP"],
    link: "https://course.fast.ai/",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&auto=format&fit=crop&q=60"
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
    id: "coursera-gen-ai",
    title: "Generative AI Specialization",
    provider: "Coursera",
    duration: "48 hours",
    level: "Intermediate",
    category: "Specialized",
    description: "A series of courses covering generative AI techniques and applications.",
    topics: ["GenAI Architecture", "Model Fine-Tuning", "PyTorch", "HuggingFace Transformers"],
    link: "https://www.coursera.org/specializations/generative-ai-engineering-with-llms",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
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
    id: "prompt-engineering-deeplearning",
    title: "ChatGPT Prompt Engineering for Developers",
    provider: "DeepLearning.AI & OpenAI",
    duration: "2-3 hours",
    level: "Intermediate",
    category: "Specialized",
    description: "Learn prompt engineering best practices from OpenAI and DeepLearning.AI experts. Master techniques for building reliable and effective prompts for development tasks.",
    topics: ["Prompt Engineering", "Iterative Prompting", "Chain of Thought", "API Integration"],
    link: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    image: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=3540&auto=format&fit=crop"
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
    format: "Video"
  }
]

export const courses: Course[] = [...advancedCourses, ...existingCourses].sort((a, b) => {
  const levelOrder = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3
  }
  return levelOrder[a.level] - levelOrder[b.level]
})
