import { Component ,OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next:data => {
        this.content = data;
      },
      error:err => {
        this.content = JSON.parse(err.error).message;
      }
  });
  }
}
