import { Component , OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next:data => {
        this.content = data;
      },
      error:err => {
        this.content = JSON.parse(err.error).message;
      }
  });
  }
}