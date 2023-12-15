import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //constructor() { }

  getSkills(){
    return ['Skill from service 1', 'Skill from service 2', 'Skill from service 3'];
  }
}
