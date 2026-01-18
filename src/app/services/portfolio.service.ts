import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  projects = [
    {
      title: 'Project 1',
      description: 'A web application built with Angular and Node.js for task management.',
      githubUrl: 'https://github.com/username/project1',
      shortDescription: 'Task management app'
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform using React and Express with payment integration.',
      githubUrl: 'https://github.com/username/project2',
      shortDescription: 'Online store platform'
    },
    {
      title: 'Project 3',
      description: 'Mobile app for fitness tracking built with Flutter and Firebase.',
      githubUrl: 'https://github.com/username/project3',
      shortDescription: 'Fitness tracking mobile app'
    }
  ];

  skills = [
    { name: 'Angular', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Flutter', level: 70 }
  ];

  achievements = [
    {
      title: 'Hackathon Winner',
      description: 'Won first place in the 2023 Web Development Hackathon organized by Tech University.',
      date: '2023'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open source projects on GitHub, focusing on Angular libraries.',
      date: '2022-2024'
    },
    {
      title: 'Certified Angular Developer',
      description: 'Achieved Angular certification from Google.',
      date: '2023'
    }
  ];

  resumeUrl = 'assets/resume.txt';

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
