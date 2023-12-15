import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = ['Skill 1', 'Skill 2', 'Skill 3'];
  knowledges: string[] = ['Knowledge 1', 'Knowledge 2', 'Knowledge 3'];
  sertificats: string[] = ['Certificate 1', 'Certificate 2', 'Certificate 3'];
}
