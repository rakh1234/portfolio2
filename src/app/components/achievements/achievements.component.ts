import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  achievements: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.achievements = this.portfolioService.getAchievements();
  }
}
