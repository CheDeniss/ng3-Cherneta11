import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceComponent} from "../experience/experience.component";
import {SkillsComponent} from "../skills/skills.component";
import {LinksComponent} from "../links/links.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, ExperienceComponent, SkillsComponent, LinksComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  fullName: string = 'Denys Cherneta';
  phone: string = '+380660519404';
  city: string = 'Lviv';
}
