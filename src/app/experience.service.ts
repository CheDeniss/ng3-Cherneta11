import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  expirience = ['Experience from service 1.', 
                'Experience from service 2.', 
                'Experience from service 3.', 
                'Experience from service 4.', 
                'Experience from service 5.']

  getExper(){
    return this.expirience
  }
}
