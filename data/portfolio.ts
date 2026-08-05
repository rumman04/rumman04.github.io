export const siteConfig = {
  name: 'Rumman Ahmed',
  title: 'Computer Engineer | AI & Computer Vision Researcher | Embedded Systems Engineer | Future MS in Artificial Intelligence Student',
  description: 'Passionate Computer Engineer with experience in Artificial Intelligence, Computer Vision, Machine Learning, Deep Learning, Embedded Systems, IoT, Robotics, UAVs, and Full Stack Development.',
  email: 'khanrumman820@gmail.com',
  phone: '+92 317 3960244',
  location: 'Pakistan',
  linkedIn: 'https://www.linkedin.com/in/rumman-ahmed-bce',
  github: 'https://github.com/rumman04',
  resume: '/resume.pdf',
  sections: [
    'Home',
    'About',
    'Education',
    'Experience',
    'Skills',
    'Projects',
    'Research',
    'Certifications',
    'Resume',
    'Achievements',
    'Contact'
  ]
};

export const education = [
  {
    title: 'Bachelor of Computer Engineering',
    institution: 'COMSATS University Islamabad, Abbottabad Campus',
    date: '2020 - 2024',
    details: ['CGPA: 3.43 / 4.00', 'Relevant coursework: AI, Computer Vision, Embedded Systems, Robotics']
  },
  {
    title: 'Master of Science in Artificial Intelligence (Future)',
    institution: 'University of Milano-Bicocca, Italy',
    date: '2026 - 2028',
    details: ['Focused on AI research, machine intelligence, and autonomy.']
  }
];

export const experience = [
  {
    role: 'Lab Engineer',
    company: 'Ghulam Ishaq Khan Institute (GIKI)',
    date: '2024 - Present',
    responsibilities: [
      'Supervised AI and embedded systems labs',
      'Taught AI students and provided programming guidance',
      'Troubleshot hardware and electronics systems',
      'Supported embedded systems, AI labs, and robotics development'
    ]
  },
  {
    role: 'Business Development Officer',
    company: 'Telenor Pakistan',
    date: '2023',
    responsibilities: ['Collaborated on technical outreach and market initiatives.']
  },
  {
    role: 'Frontend Developer Intern',
    company: 'React Developer',
    date: '2022',
    responsibilities: ['Built responsive UI components and web experiences.']
  }
];

export const skills = [
  {
    category: 'Programming',
    items: ['C++', 'Python', 'Java', 'JavaScript', 'MATLAB', 'SQL']
  },
  {
    category: 'Web',
    items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'Node.js']
  },
  {
    category: 'AI',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'LLMs']
  },
  {
    category: 'Hardware',
    items: ['ESP32', 'Arduino', 'Raspberry Pi', 'STM32', 'Pixhawk', 'IoT', 'Robotics']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code', 'Arduino IDE', 'MATLAB']
  }
];

export const projects = [
  {
    title: 'AI Weed Detection using U-Net',
    description: 'Semantic segmentation model for identifying weeds and crops using deep vision techniques.',
    technologies: ['TensorFlow', 'U-Net', 'Computer Vision'],
    image: '/project-weed.png',
    github: 'https://github.com/rumman04/ai-weed-detection',
    demo: '#'
  },
  {
    title: 'Potato Disease Detection',
    description: 'CNN system for early detection of potato leaf diseases using image analytics.',
    technologies: ['TensorFlow', 'CNN', 'Deep Learning'],
    image: '/project-potato.png',
    github: 'https://github.com/rumman04/potato-disease-detection',
    demo: '#'
  },
  {
    title: 'Smart IoT Fan using ESP32',
    description: 'IoT-based smart fan controller with sensors and remote monitoring using Blynk.',
    technologies: ['ESP32', 'Blynk', 'DHT11', 'Relay'],
    image: '/project-iot-fan.png',
    github: 'https://github.com/rumman04/smart-iot-fan',
    demo: '#'
  },
  {
    title: 'UAV Smart Agriculture Research',
    description: 'Drone research combining computer vision and deep learning for agricultural monitoring.',
    technologies: ['Drone', 'Computer Vision', 'Deep Learning'],
    image: '/project-uav.png',
    github: 'https://github.com/rumman04/uav-smart-agriculture',
    demo: '#'
  },
  {
    title: 'React Web Applications',
    description: 'Modern frontend interfaces built with React and Tailwind CSS.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/project-react.png',
    github: 'https://github.com/rumman04/react-web-apps',
    demo: '#'
  }
];

export const researchInterests = [
  'Artificial Intelligence',
  'Computer Vision',
  'Machine Learning',
  'Deep Learning',
  'Large Language Models',
  'Embedded AI',
  'Autonomous Systems',
  'Precision Agriculture',
  'UAV Technologies',
  'Robotics',
  'Smart Systems'
];

export const achievements = [
  'Computer Engineering Graduate',
  'Research Enthusiast',
  'Lab Engineer',
  'Multiple AI Projects',
  'IoT Projects',
  'Embedded Systems Projects'
];

export const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'AI Research Mentor',
    feedback: 'Rumman brings a rare combination of technical depth and research curiosity. His work in computer vision is both innovative and practical.'
  },
  {
    name: 'Imran Siddiqui',
    role: 'Project Lead',
    feedback: 'A professional collaborator who delivers clean solutions with strong attention to detail. His embedded systems designs are robust and elegant.'
  },
  {
    name: 'Sara Malik',
    role: 'Software Engineer',
    feedback: 'Rumman has a polished frontend sense and a real passion for intelligent systems. His communication and delivery are excellent.'
  }
];

export const gallery = [
  { title: 'AI Weed Detection', image: '/gallery-weed.png' },
  { title: 'Potato Disease Detection', image: '/gallery-potato.png' },
  { title: 'Smart IoT Fan', image: '/gallery-iot-fan.png' },
  { title: 'UAV Agriculture', image: '/gallery-uav.png' },
  { title: 'React Web Interfaces', image: '/gallery-react.png' }
];
