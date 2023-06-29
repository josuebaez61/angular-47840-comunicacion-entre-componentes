import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.scss']
})
export class SelectableListComponent {
  // ENTRADA
  // Aqui recibo los items
  @Input()
  items: string[] = [];

  @Output()
  itemsChange = new EventEmitter();

  // ENTRADA
  // Aqui recibo que color de fondo deberia o tener la lista
  @Input()
  backgroundColor: string = '';

  // SALIDA
  // Emito el item seleccionado
  @Output()
  onSelect = new EventEmitter();

  removeItem(index: number): void {
    this.itemsChange.emit(
      this.items.filter((_, i) => i !== index)
    );
  }
}
