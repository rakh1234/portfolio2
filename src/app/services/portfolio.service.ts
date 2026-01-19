import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  projects = [
    {
      title: 'ZARA\'A iOS App',
      description: 'Collaborative iOS application developed to help companies identify suitable agricultural areas, saving time and resources in agricultural planning.',
      githubUrl: 'https://github.com/rakh1234/zaraa-ios-app',
      shortDescription: 'Agricultural area identification iOS app'
    },
    {
      title: 'Health Tracker Application',
      description: 'A full-stack health management web application exposing a RESTful API, containerized with Docker and deployed on Render using a render.yaml configuration..',
      githubUrl: 'https://github.com/rakh1234/HealthTracker',
      shortDescription: 'Full-stack health tracking web application',
      liveDemoUrl: 'https://healthtracker-is4l.onrender.com'
    },
    {
      title: 'Mentor-Matching ML Algorithm',
      description: 'A machine learning–based matching system that connects users with suitable mentors based on profile data. The project is containerized using Docker and integrates with a relational database for efficient data management.',
      githubUrl: 'https://github.com/rakh1234/Mentor-Matching-ML-Algorithm',
      shortDescription: 'ML algorithm for mentor-user matching'
    }
  ];

  skills = [
    { name: 'Python' },
    { name: 'Django' },
    { name: 'Angular' },
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' },
    { name: 'PostgreSQL' },
    { name: 'MSSQL' },
    { name: 'RESTful APIs' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'AWS' },
    { name: 'Swift'},
    { name: 'Data Analysis' }
  ];

  achievements = [
    {
      title: 'PCAP-31-03 Certified Associate in Python',
      description: 'Earned an industry-recognized Python certification demonstrating solid understanding of Python fundamentals, core syntax, and best practices.',
      date: '2025'
    },
    {
      title: 'Apple Developer Academy Graduate',
      description: 'Completed an iOS development program, gaining hands-on experience in Swift and building real-world applications.',
      date: '2022'
    },
    {
      title: 'Programming for Data Science Nanodegree',
      description: 'Completed a Udacity Nanodegree covering data science fundamentals, data analysis techniques, and programming concepts for real-world applications.',
      date: '2022'
    },
    {
      title: 'Data Management and Analysis Training',
      description: 'Completed comprehensive training in data management and analysis, strengthening skills in data processing and analysis.',
      date: '2023'
    },
    {
      title: 'Full-Stack Development Projects',
      description: 'Built and deployed full-stack web applications and internal services using Django, Angular, and React, with database integration and containerized deployments workflows within a company environment.',
      date: '2024-2025'
    }
  ];

  resumeUrl = 'assets/RazanKhalidAlkhodhairCV 1.pdf';

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  getAchievements() {
    return this.achievements;
  }

  getResumeUrl() {
    return this.resumeUrl;
  }
}
