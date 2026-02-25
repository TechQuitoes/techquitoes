import {
  Globe,
  Smartphone,
  Code2,
  Brain,
  ShoppingCart,
  HeartPulse,
} from "lucide-react";

export const servicesData = [
  {
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    title: "Website Development",
    desc: "Professional website development services for businesses and startups. We build responsive, SEO-friendly, and high-performance websites tailored to your goals.",
    points: [
      "Custom responsive designs",
      "SEO optimized architecture",
      "Fast loading speeds",
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
    title: "App Development",
    desc: "Native and cross-platform mobile app development services. We build iOS and Android apps that deliver smooth user experiences.",
    points: [
      "iOS & Android apps",
      "React Native & Flutter",
      "Push notifications",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    title: "Custom Web/App Development",
    desc: "Tailored web and mobile solutions designed specifically for your unique business requirements and workflows.",
    points: [
      "Bespoke functionality",
      "API integrations",
      "Scalable architecture",
    ],
  },
  {
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    title: "AI SaaS Product Solution",
    desc: "Intelligent SaaS platforms powered by AI and machine learning. Automate workflows and gain valuable business insights.",
    points: [
      "Machine learning models",
      "Natural language processing",
      "Predictive analytics",
    ],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />,
    title: "E-commerce Software",
    desc: "Complete e-commerce platforms with secure payments, inventory management, and sales analytics for online stores.",
    points: [
      "Bespoke functionality",
      "API integrations",
      "Scalable architecture",
    ],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
    title: "Healthcare Product",
    desc: "HIPAA-compliant healthcare software for patient management, telemedicine, and electronic health records.",
    points: [
      "Machine learning models",
      "Natural language processing",
      "Predictive analytics",
    ],
  },
];
