import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentCover:string = ''
  @Input()
  contentTitle:string = ''
  @Input()
  contentDescription:string = ''
  private id:string | null = '0'

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("Id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id )[0]

    this.contentCover = result.contentCover
    this.contentTitle = result.contentTitle
    this.contentDescription = result.contentDescription
  }

}
