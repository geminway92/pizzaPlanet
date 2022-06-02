import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  valueSelect = new FormControl();
  @Input() labelFilter = '';
  @Input() labelSelect = '';
  @Input() optionList: string[] = []

  constructor() { }
  value: string = 'Buscar'


  ngOnInit(): void {
  }
  checkForm(){
    console.log(this.valueSelect.value)
  }

}
