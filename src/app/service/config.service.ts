import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Cars and Vans';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Cars', link: '/cat01'},
    {text: 'Vans', link: '/cat02'},
  ];

  constructor() { }
}
