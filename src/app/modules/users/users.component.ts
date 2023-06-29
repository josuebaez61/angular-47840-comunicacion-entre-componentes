import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SelectableListComponent } from 'src/app/components/selectable-list/selectable-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
  users: string[] = ['Jorge', 'Alan', 'Celeste', 'Matias'];

  courses: string[] = ['Angular', 'React', 'Python'];

  interval = setInterval(() => {
    console.log('hola')
  }, 1000)

  @ViewChild('titulo') myDiv?: ElementRef<HTMLDivElement>;

  @ViewChild(SelectableListComponent) list?: SelectableListComponent;

  constructor() {
    console.log('CONSTRUCTOR');

  }
  ngOnDestroy(): void {
    console.log('ON DESTROY')
    clearInterval(this.interval);
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.myDiv?.nativeElement);
    console.log(this.list);
  }

  ngOnInit(): void {
    console.log('ON INIT');
  }

  onSelectUser(item: string): void {
    console.log('Se seleciono un item ' + item)
  }
}
