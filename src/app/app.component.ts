import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

interface DropdownList {
  name: string;
}

@Component({
  host: {
    '(document:click)': "onClick($event)",
  },
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-dropdown';
  public open = false;
  public cache = 'Select the item';
  public itemName = this.cache;

  public myDropdownList: DropdownList[] = [
    {name: 'Clear the option'},
    {name: 'Monday'},
    {name: 'Sunday'},
    {name: 'Tuesday'},
    {name: 'Wednesday'},
    {name: 'Thursday'},
    {name: 'Friday'},
    {name: 'Saturday'},
  ];

  @ViewChild('dropdownMenu')
  dropDown: ElementRef<HTMLDivElement>;

  public toggle(): void {
    this.open = !this.open;
  }

  public selectedItem(name: string): void {
    if (name === this.myDropdownList[0].name) {
      this.itemName = this.cache;
    } else {
      this.itemName = name;
    }
    this.open = false;
  }

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    this.cache = this.dropDown.nativeElement.innerText;
  }

  public onClick(event: Event) {
    if (event.target === this.dropDown.nativeElement) {
      this.open = !this.open;
    } else {
      this.open = this.elRef.nativeElement.contains(event.target) ? this.open : false;
    }
  }
}

