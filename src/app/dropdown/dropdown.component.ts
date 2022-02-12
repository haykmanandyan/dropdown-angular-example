import {Component, OnInit} from '@angular/core';
import {DropdownItem} from "./dropdown-interface";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public myDropdownList: DropdownItem[] = [];
  public myDropdownItem: DropdownItem;

  constructor() {
    this.myDropdownList = [
      {name: 'Clear the option'},
      {name: 'Monday'},
      {name: 'Sunday'},
      {name: 'Tuesday'},
      {name: 'Wednesday'},
      {name: 'Thursday'},
      {name: 'Friday'},
      {name: 'Saturday'},
    ]
  }

  public ngOnInit(): void {
  }

}
