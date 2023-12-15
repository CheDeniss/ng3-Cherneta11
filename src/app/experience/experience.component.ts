import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
constructor (private expServ: ExperienceService){}
expirience:string[] = []
ngOnInit():void{
  this.expirience=this.expServ.getExper()
}

//expirience = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
 // 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //'when an unknown printer took a galley of type and scrambled it to make a type specimen book. '];

budget = 2000000;
satisfactionFrom = 0.77;
satisfactionTo = 0.92;
}
