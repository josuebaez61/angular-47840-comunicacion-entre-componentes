import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableListComponent } from './selectable-list/selectable-list.component';



@NgModule({
  declarations: [
    SelectableListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectableListComponent
  ]
})
export class ComponentsModule { }
