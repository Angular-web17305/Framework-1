import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/interface/users';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: User[] = [];

  constructor(private userService: UserService,
   
    ) {}

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        error => {
          console.log('Đã xảy ra lỗi khi lấy danh sách người dùng.');
        }
      );
  }

  removeUser(userId: string) {
    this.userService.deleteUser(userId)
      .subscribe(
        () => {
          
          this.users = this.users.filter(user => user._id !== +userId);
        },
        error => {
          console.log('Đã xảy ra lỗi khi xóa người dùng.');
        }
      );
  }
}
