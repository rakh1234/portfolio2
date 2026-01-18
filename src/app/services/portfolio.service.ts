import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  projects = [
    {
      title: 'ZARA\'A iOS App',
      description: 'Collaborative iOS application developed during Apple Developer Academy training to help companies identify suitable agricultural areas, saving time and resources in agricultural planning.',
      githubUrl: 'https://github.com/rakh1234/zaraa-ios-app',
      shortDescription: 'Agricultural area identification iOS app'
    },
    {
      title: 'Django RESTful API Platform',
      description: 'Full-stack web application built with Django (MVT) and React, featuring JWT authentication, PostgreSQL/MSSQL database management, and RESTful API design for data conversion and unified object handling.',
      githubUrl: 'https://github.com/rakh1234/django-react-platform',
      shortDescription: 'Full-stack Django/React web platform'
    },
    {
      title: 'Dockerized Web Applications',
      description: 'Containerized web applications with automated deployment pipelines, cron job automation for periodic tasks, and internal company deployment tools integration.',
      githubUrl: 'https://github.com/rakh1234/dockerized-apps',
      shortDescription: 'Containerized web applications with CI/CD'
    },
    {
      title: 'Angular Frontend Development',
      description: 'Responsive web applications built with Angular, featuring modern UI components, cross-functional team collaboration, and seamless frontend feature implementation.',
      githubUrl: 'https://github.com/rakh1234/angular-frontend',
      shortDescription: 'Modern Angular web applications'
    }
  ];

  skills = [
    { name: 'Python', level: 90 },
    { name: 'Django', level: 88 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 82 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'MSSQL', level: 75 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'AWS', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'Swift', level: 70 },
    { name: 'Data Analysis', level: 75 }
  ];

  achievements = [
    {
      title: 'PCAP-31-03 Certified Associate in Python',
      description: 'Achieved Python certification demonstrating proficiency in Python programming fundamentals and best practices.',
      date: '2025'
    },
    {
      title: 'Apple Developer Academy Graduate',
      description: 'Completed intensive iOS development training program, developing the ZARA\'A agricultural app and gaining expertise in Swift and iOS development.',
      date: '2022'
    },
    {
      title: 'Programming for Data Science Nanodegree',
      description: 'Completed Udacity Nanodegree program covering data science fundamentals, analysis techniques, and programming applications.',
      date: '2022'
    },
    {
      title: 'Data Management and Analysis Training',
      description: 'Completed comprehensive training camp in data management and analysis, enhancing skills in data processing and analytical techniques.',
      date: '2023'
    },
    {
      title: 'iOS Developer Nanodegree',
      description: 'Completed Udacity iOS Developer Nanodegree, gaining expertise in mobile app development and Swift programming.',
      date: '2021'
    },
    {
      title: 'Full-Stack Development Experience',
      description: 'Successfully developed and deployed multiple full-stack applications using Django, React, Angular, and various database technologies.',
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
