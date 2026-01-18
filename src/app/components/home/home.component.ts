import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.skills = this.portfolioService.getSkills();
  }
}
