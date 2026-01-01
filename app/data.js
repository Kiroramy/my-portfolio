import {
  Code2,
  Layout,
  Smartphone,
  Database,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const USER_INFO = {
  name: "اسمك هنا",
  role: "Senior Fullstack Developer",
  bio: "متخصص في بناء تطبيقات الويب والموبايل باستخدام أحدث التقنيات. أركز على الأداء، تجربة المستخدم، وكتابة كود نظيف وقابل للتوسع.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedIn: "#",
};

export const SKILLS = [
  {
    name: "Next.js",
    icon: <Layout size={20} />,
    level: "95%",
    color: "text-white",
  },
  {
    name: "PHP / Laravel",
    icon: <Database size={20} />,
    level: "90%",
    color: "text-red-500",
  },
  {
    name: "React Native",
    icon: <Smartphone size={20} />,
    level: "85%",
    color: "text-blue-400",
  },
  {
    name: "Django REST",
    icon: <Code2 size={20} />,
    level: "65%",
    color: "text-green-600",
  }, // المستوى هنا أقل كما طلبت
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "نظام متكامل للتجارة الإلكترونية مع لوحة تحكم Laravel وواجهة Next.js.",
    link: "https://github.com/yourusername/project1",
    tags: ["Laravel", "Next.js", "MySQL"],
  },
  {
    title: "Real-time Chat App",
    description:
      "تطبيق موبايل للمحادثة الفورية مبني باستخدام React Native و Socket.io.",
    link: "https://github.com/yourusername/project2",
    tags: ["React Native", "Node.js"],
  },
];
