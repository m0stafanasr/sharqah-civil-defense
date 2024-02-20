import { Component } from '@angular/core';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';;
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideMenuComponent, RouterOutlet ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
