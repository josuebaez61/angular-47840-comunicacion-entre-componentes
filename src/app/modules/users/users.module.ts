import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
