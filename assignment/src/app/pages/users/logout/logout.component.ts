import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private authService: AuthService) { }

  logout() {
    // Gọi phương thức logout từ AuthService
    this.authService.logout();
  }
}
