import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: string[] = ['Jorge', 'Alan', 'Celeste', 'Matias'];

  courses: string[] = ['Angular', 'React', 'Python'];

  onSelectUser(item: string): void {
    console.log('Se seleciono un item ' + item)
  }
}
