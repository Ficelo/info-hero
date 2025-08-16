import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tooltip} from 'primeng/tooltip';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-source-defis',
  imports: [
    Tooltip,
    NgStyle,
    NgClass
  ],
  templateUrl: './source-defis.html',
  standalone: true,
  styleUrl: './source-defis.css'
})
export class SourceDefis {

  @Input() name: string = "";
  @Input() icon: string = "";
  @Input({transform: booleanAttribute}) correct: boolean = false;

  @Output() addNameToList = new EventEmitter<string>;
  @Output() removeNameFromList = new EventEmitter<string>;

  isSelected : boolean = false;
  selectedStyle : string = "selected";
  unselectedStyle: string = "unselected";
  style : string = this.unselectedStyle;

  addOrRemoveName() {
    if (!this.isSelected) {
      this.addNameToList.emit(this.name);
      this.isSelected = true;
    } else {
      this.removeNameFromList.emit(this.name);
      this.isSelected = false;
    }

    this.style = (this.isSelected) ? this.selectedStyle : this.unselectedStyle;
  }

}
