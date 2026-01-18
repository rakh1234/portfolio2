import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resumeUrl: string = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.resumeUrl = this.portfolioService.getResumeUrl();
  }

  downloadResume() {
    window.open(this.resumeUrl, '_blank');
  }
}
