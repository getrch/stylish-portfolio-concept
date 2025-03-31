
import { Project } from "@/types/project.types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard with real-time analytics, inventory management, and order processing. Built with React, TypeScript, and Node.js.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description: "An application to track personal expenses, create budgets, and visualize spending patterns with interactive charts.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
    ],
    technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 3,
    title: "Restaurant Booking System",
    description: "A full-stack application for restaurant table reservations with authentication, admin panel, and automated email notifications.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A modern weather application with 5-day forecast, location detection, and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["React", "OpenWeather API", "Styled Components"],
    repoUrl: "https://github.com",
    category: "Web Application"
  },
  {
    id: 5,
    title: "Task Management API",
    description: "RESTful API for task management with user authentication, task categories, and detailed documentation.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["Flask", "Python", "PostgreSQL", "JWT", "Swagger"],
    repoUrl: "https://github.com",
    category: "API"
  },
  {
    id: 6,
    title: "Smart Home Dashboard",
    description: "A IoT dashboard to control and monitor smart home devices with real-time updates and energy consumption analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
    additionalImages: [],
    technologies: ["React", "Node.js", "MQTT", "Socket.IO", "Chart.js"],
    category: "IoT"
  }
];
