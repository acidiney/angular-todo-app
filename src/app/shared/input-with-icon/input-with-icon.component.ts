import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IFormInput } from '../interfaces/form-input.interface';

export interface IOutputInputValue {
  bind: string;
  currentValue: string;
}

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.css']
})
export class InputWithIconComponent implements OnInit {

  @Input() formOptions: IFormInput;
  @Output() inputEvent: EventEmitter<IOutputInputValue> = new EventEmitter<IOutputInputValue>();

  constructor() { }

  ngOnInit(): void {
  }

  setText(e: any): void {
    const currentValue = e.target.value;
    this.inputEvent.emit({
      bind: this.formOptions.bind,
      currentValue
    });
  }

  get extraClass(): string {
    return this.formOptions.extraClass || 'x';
  }

}
