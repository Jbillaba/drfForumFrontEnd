import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { ForumapiService } from '../../services/forumapi.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  private isVisible: boolean = false;
  visibilityClasses: {} | undefined;
  constructor(public storageService: StorageService,
              public forumApiService: ForumapiService) {}

  ngOnInit(): void {
    this.setVisibility()
  }

  toggleVisiblity(isVisible: boolean): void {
    this.isVisible = isVisible;
    this.setVisibility();
  }
  
  private setVisibility(): void {
    this.visibilityClasses = {
      'opacity-0': !this.isVisible,
      'opacity-100': this.isVisible
    }
  }



}
