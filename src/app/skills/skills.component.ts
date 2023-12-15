import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:string[] = []
  constructor(private skillServ: SkillsService){}

  ngOnInit(): void {
    this.skills = this.skillServ.getSkills()
  }
  
  knowledges: string[] = ['Knowledge 1', 'Knowledge 2', 'Knowledge 3'];
  sertificats: string[] = ['Certificate 1', 'Certificate 2', 'Certificate 3'];
}
