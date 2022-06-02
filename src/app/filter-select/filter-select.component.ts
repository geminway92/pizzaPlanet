import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {
  myForm: FormGroup = this.fb.group({
    valueSelect: [''],
    valueFilter: ['']
  })
  @Input() labelFilter = '';
  @Input() labelSelect = '';
  @Input() optionList: string[] = []
  
  @Output() changeSelect: EventEmitter<FormGroup> = new EventEmitter();
  @Output() typeInput: EventEmitter<FormGroup> = new EventEmitter();

  constructor( private fb: FormBuilder ) { }
  

  // CREAR UN NUEVO FORMULARIO CON LOS CAMPOS ROL Y FILTER
  //TODO Refactorizar
  handleChangeSelect(){
    // PASAR EL FORMULARIO
    this.changeSelect.emit(this.myForm)
  }
  
  handleTypeInput() {
    // PASAR EL FORMULARIO
    this.typeInput.emit(this.myForm)
  }

}
