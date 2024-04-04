import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

	@Input() name:string = ''
  constructor() {
    console.log('Constructor'+this.name)
  }
  ngOnChanges(): void {
    console.log('OnChange event.'+this.name);
  }

  ngOnInit(): void {
		this.name = 'Olá '+ this.name
		console.log('OnInit event.'+this.name)
  }

}
